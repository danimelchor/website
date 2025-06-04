"use client";
import moment from "moment";
import classNames from "classnames";
import Badge from "@/_components/Badge";
import { DATE_FMT, POST_TYPE_COLOR } from "@/app/blog/[post]/blog";
import { useState } from "react";
import { COLOR_TO_BG, COLOR_TO_TEXT_COLOR } from "@/colors";
import { useRouter } from "next/navigation";
import { Post } from "@/interfaces/post";
import { getPostList, ListPostsFilter } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton";

const BlogPostSkeleton = () => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-between p-4 rounded-xl py-7 px-5 lg:p-10 bg-gradient-to-t from-transparent gap-8 animate-pulse",
        COLOR_TO_BG.slate,
      )}
    >
      <div className="flex flex-col">
        <Skeleton width={70} extra="h-8 mb-2" />
        <Skeleton width={100} extra="h-5" />
        <div className="text-slate-700 dark:text-slate-400 flex gap-2 mt-2 items-center">
          <Skeleton width={20} extra="h-4" />
          <span>•</span>
          <Skeleton width={20} extra="h-4" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Skeleton width={20} extra="h-4" />
        <Skeleton width={20} extra="h-4" />
      </div>
    </div>
  );
};

const BlogPostItem = ({ post }: { post: Post }) => {
  const color = POST_TYPE_COLOR[post.type];
  const router = useRouter();

  return (
    <div
      className={classNames(
        "flex flex-col justify-between p-4 rounded-xl py-7 px-5 lg:p-10 bg-gradient-to-t from-transparent group cursor-pointer gap-2",
        COLOR_TO_BG[color],
      )}
      onClick={() => router.replace(`/blog/${post.id}`)}
    >
      <div className="flex flex-col">
        <div
          className={classNames(
            "text-xl font-bold lg:group-hover:underline",
            COLOR_TO_TEXT_COLOR[color],
          )}
        >
          {post.title}
        </div>
        <div className="lg:text-lg text-slate-800 dark:text-slate-200">
          {post.subtitle}
        </div>
        <div className="text-slate-700 dark:text-slate-400 flex gap-2 mt-2">
          <span>{moment.utc(post.date).format(DATE_FMT)}</span>
          <span>•</span>
          <span>{moment.duration(post.read).humanize()} read</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge text={post.type} color={color} />
        <Badge text={post.state} color="gray" />
      </div>
    </div>
  );
};

export default function BlogPostList() {
  const [filters, setFilters] = useState<ListPostsFilter>({
    limit: 10,
    offset: 0,
  });

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts", filters],
    queryFn: async () => getPostList(filters),
  });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => <BlogPostSkeleton key={i} />)}
        {posts?.map((post) => <BlogPostItem post={post} key={post.id} />)}
      </div>
      {!isLoading && (!posts || posts.length === 0) && (
        <p className="dark:text-slate-200">No posts yet!</p>
      )}
    </>
  );
}
