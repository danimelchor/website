"use client";
import moment from "moment";
import { DATE_FMT } from "@/app/blog/[blog]/blog";
import { Post } from "@/interfaces/post";
import { use } from "react";
import Markdown from "./Mardown";
import { IoWarning } from "react-icons/io5";
import Banner from "./Banner";

const Word = ({ width }: { width: number }) => (
  <div
    className={"rounded-full h-3 bg-gray-200 grow-0"}
    style={{ width: `${width}%` }}
  />
);

const Sentence = ({ words }: { words: number[] }) => (
  <div className="flex gap-3">
    {words.map((w, key) => (
      <Word width={w} key={key} />
    ))}
  </div>
);

export function BlogPostLoader() {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="rounded-full h-10 w-full bg-gray-200 mb-1"></div>
      <div className="rounded-full h-8 w-2/3 mb-3 bg-gray-200"></div>
      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-400 mb-6">
        <div className="rounded-full h-4 w-30 bg-gray-200"></div>
        <span>•</span>
        <div className="rounded-full h-4 w-30 bg-gray-200"></div>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <Sentence words={[10, 10, 5, 20, 5, 20, 20, 5]} />
        <Sentence words={[10, 5, 10, 5, 20, 10, 20, 15]} />
        <Sentence words={[5, 10, 5, 5, 15, 5, 10, 10, 20]} />
        <Sentence words={[10, 10, 5, 20, 5, 20, 20]} />
        <Sentence words={[3, 7, 10, 5, 5, 20]} />
      </div>
      <div className="flex flex-col gap-3">
        <Sentence words={[10, 5, 10, 5, 20, 10, 20, 15]} />
        <Sentence words={[10, 10, 5, 20, 5, 20, 20]} />
        <Sentence words={[10, 10, 5, 20, 5, 20, 20, 5]} />
        <Sentence words={[5, 10, 5, 5, 15, 5, 10, 10, 20]} />
        <Sentence words={[3, 7, 10, 5, 5, 10, 10]} />
      </div>
    </div>
  );
}

export default function BlogPost({ post }: { post: Promise<Post> }) {
  const postInfo = use(post);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl lg:text-4xl font-bold mb-1 text-slate-800 dark:text-slate-200">
          {postInfo.title}
        </h1>
        <h2 className="text-xl lg:text-2xl mb-3 text-slate-800 dark:text-slate-200">
          {postInfo.subtitle}
        </h2>
        <div className="flex gap-2 text-slate-700 dark:text-slate-400">
          <span>{moment.utc(postInfo.date).format(DATE_FMT)}</span>
          <span>•</span>
          <span>{moment.duration(postInfo.read).humanize()} read</span>
        </div>
      </div>

      {postInfo.state !== "published" && (
        <Banner
          title="Warning"
          icon={<IoWarning className="w-5 h-5" />}
          description={`This is a ${postInfo.state} post still. Please, do not take any information here as factual nor quote me on it yet ;). If you have any suggestions or comments, please contact me and I will address them ASAP.`}
          color="orange"
        />
      )}

      <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
        <Markdown content={postInfo.content} />
      </article>
    </>
  );
}
