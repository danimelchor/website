"use client";
import moment from "moment";
import classNames from "classnames";
import Badge from "@/_components/Badge";
import { DATE_FMT, ARTICLE_TYPE_COLOR } from "@/app/blog/[blog]/blog";
import { useEffect, useState } from "react";
import { COLOR_TO_BG, COLOR_TO_TEXT_COLOR } from "@/colors";
import { useRouter } from "next/navigation";
import { Article } from "@/interfaces/post";
import { getPostList, ListPostsFilter } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const BlogPostItem = ({ article }: { article: Article }) => {
  const color = ARTICLE_TYPE_COLOR[article.type];
  const router = useRouter();

  return (
    <div
      className={classNames(
        "flex flex-col justify-between p-4 rounded-xl py-7 px-5 lg:p-10 bg-gradient-to-t from-transparent group cursor-pointer gap-2",
        COLOR_TO_BG[color],
      )}
      onClick={() => router.replace(`/blog/${article.id}`)}
    >
      <div className="flex flex-col">
        <div
          className={classNames(
            "text-xl font-bold lg:group-hover:underline",
            COLOR_TO_TEXT_COLOR[color],
          )}
        >
          {article.title}
        </div>
        <div className="lg:text-lg text-slate-800 dark:text-slate-200">
          {article.subtitle}
        </div>
        <div className="text-slate-700 dark:text-slate-400 flex gap-2 mt-2">
          <span>{moment.utc(article.date).format(DATE_FMT)}</span>
          <span>•</span>
          <span>{moment.duration(article.read).humanize()} read</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge text={article.type} color={color} />
        <Badge text={article.state} color="gray" />
      </div>
    </div>
  );
};

export default function BlogPostList() {
  const [filters, setFilters] = useState<ListPostsFilter>({
    limit: 10,
    offset: 0,
    showDrafts: false,
  });

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", filters],
    queryFn: async () => getPostList(filters),
  });

  return (
    <div className="flex flex-col">
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors mb-3">
        Blog
      </h2>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-slate-800 dark:text-slate-200 text-2xl transition-colors">
          A collection of ideas and topics I'm interested in.
        </h3>

        <div className="items-center gap-2 hidden lg:flex">
          <input
            type="checkbox"
            id="show-drafts"
            className="cursor-pointer"
            onChange={(e) =>
              setFilters((f) => ({ ...f, showDrafts: e.target.checked }))
            }
          />
          <label
            htmlFor="show-drafts"
            className="text-slate-600 dark:text-slate-400 select-none cursor-pointer"
          >
            Show drafts
          </label>
        </div>
      </div>

      {isLoading && <Spinner title="Loading blog posts" />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {articles?.map((article) => (
          <BlogPostItem article={article} key={article.id} />
        ))}
      </div>
      {!isLoading && (!articles || articles.length === 0) && (
        <p className="dark:text-slate-200">No articles yet!</p>
      )}
    </div>
  );
}
