"use server";

import { cache } from "react";
import { promises as fs } from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Post } from "@/interfaces/post";

const POSTS_DIR = join(process.cwd(), "_posts");
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

export const getPost = cache(async (name: string): Promise<Post> => {
  const fileContents = await fs.readFile(join(POSTS_DIR, `${name}.md`), "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, id: name, content } as Post;
});

export interface ListPostsFilter {
  limit: number;
  offset: number;
}

export const getPostList = cache(
  async ({ limit, offset }: ListPostsFilter): Promise<Post[]> => {
    // Load all posts
    const files = await fs.readdir(POSTS_DIR);
    const names = files.map((f) => f.replace(".md", ""));
    const allPosts = await Promise.all(names.map(getPost));
    const sortedPosts = allPosts.sort(
      (a, b) => b.date.getTime() - a.date.getTime(),
    );

    // Filter for drafts
    let visiblePosts = sortedPosts;
    if (!SHOW_DRAFTS) {
      visiblePosts = sortedPosts.filter((post) => post.state === "published");
    }

    // Paginate
    return visiblePosts.slice(offset, offset + limit);
  },
);
