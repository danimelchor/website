"use server";

import { promises as fs } from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Article } from "@/interfaces/post";

const POSTS_DIR = join(process.cwd(), "_posts");

export async function getPost(name: string): Promise<Article> {
  const fileContents = await fs.readFile(join(POSTS_DIR, `${name}.md`), "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, id: name, content } as Article;
}

export interface ListPostsFilter {
  limit: number;
  offset: number;
  showDrafts: boolean;
}

export async function getPostList({
  limit,
  offset,
  showDrafts,
}: ListPostsFilter): Promise<Article[]> {
  // Load all articles
  const files = await fs.readdir(POSTS_DIR);
  const names = files.map((f) => f.replace(".md", ""));
  const allPosts = await Promise.all(names.map(getPost));
  const sortedPosts = allPosts.sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  // Filter for drafts
  let visiblePosts;
  if (showDrafts) {
    visiblePosts = sortedPosts.filter((article) =>
      ["published", "draft"].includes(article.state),
    );
  } else {
    visiblePosts = sortedPosts.filter(
      (article) => article.state === "published",
    );
  }

  // Paginate
  return visiblePosts.slice(offset, offset + limit);
}
