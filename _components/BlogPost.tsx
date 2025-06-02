"use client";
import moment from "moment";
import { DATE_FMT } from "@/app/blog/[blog]/blog";
import { Article } from "@/interfaces/post";
import { use } from "react";
import Markdown from "./Mardown";
import { IoWarning } from "react-icons/io5";
import Banner from "./Banner";

export default function BlogPost({ post }: { post: Promise<Article> }) {
  const article = use(post);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold mb-1 text-slate-800 dark:text-slate-200">
          {article.title}
        </h1>
        <h2 className="text-2xl mb-3 text-slate-800 dark:text-slate-200">
          {article.subtitle}
        </h2>
        <div className="flex gap-2 text-slate-700 dark:text-slate-400">
          <span>{moment.utc(article.date).format(DATE_FMT)}</span>
          <span>•</span>
          <span>{moment.duration(article.read).humanize()} read</span>
        </div>
      </div>

      {article.state !== "published" && (
        <Banner
          title="Warning"
          icon={<IoWarning className="w-5 h-5" />}
          description={`This is a ${article.state} post still. Please, do not take any information here as factual nor quote me on it yet ;). If you have any suggestions or comments, please contact me and I will address them ASAP.`}
          color="orange"
        />
      )}

      <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
        <Markdown content={article.content} />
      </article>
    </>
  );
}
