"use server";
import { FaChevronLeft } from "react-icons/fa";
import Markdown from "@/components/Mardown";
import { promises as fs } from "fs";
import { ARTICLES, DATE_FMT } from "./blog";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { join } from "path";

const POSTS_DIR = join(process.cwd(), "_posts");

export default async function BlogPost({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const article = ARTICLES[blog];
  const content = await fs.readFile(join(POSTS_DIR, `${blog}.md`), "utf8");

  return (
    <div id="blog" className="w-full mb-24 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <Link href="/blog">
          <div className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline">
            <FaChevronLeft /> Go back
          </div>
        </Link>

        {article && (
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold mb-1 text-slate-800 dark:text-slate-200">
              {article.title}
            </h1>
            <h2 className="text-2xl mb-3 text-slate-800 dark:text-slate-200">
              {article.subtitle}
            </h2>
            <div className="flex gap-2 text-slate-700 dark:text-slate-400">
              <span>{article.date.format(DATE_FMT)}</span>
              <span>•</span>
              <span>{article.readTime.humanize()} read</span>
            </div>
          </div>
        )}

        <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
          <Suspense fallback={<Spinner />}>
            <Markdown content={content} />
          </Suspense>
        </article>
      </div>
    </div>
  );
}
