import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import moment from "moment";
import { FaChevronLeft } from "react-icons/fa";

export type ArticleType = "idea" | "observation";
export type ArticleState = "published" | "draft" | "not_started";

export type Article = {
  title: string;
  subtitle: string;
  date: moment.Moment;
  readTime: moment.Duration;
  type: ArticleType;
  state: ArticleState;
};

export const DATE_FMT = "MMMM Do, YYYY";
export const ARTICLES: { [name: string]: Article } = {
  high_performers: {
    title: "On being a good engineer",
    subtitle: "The single most-defining characteristic of high performers",
    date: moment("2025/06/01"),
    readTime: moment.duration(2, "minutes"),
    type: "observation",
    state: "published",
  },
  probability_and_prejudice: {
    title: "Bayes theorem and prejudice",
    subtitle: "The conflict between mathematics and morality",
    date: moment("2025/06/01"),
    readTime: moment.duration(8, "minutes"),
    type: "idea",
    state: "draft",
  },
};

function BlogPost({ name, goBack }: { name: string; goBack: () => void }) {
  const [content, setContent] = useState<string>();
  const article = ARTICLES[name];

  useEffect(() => {
    fetch(require(`../blog/${name}.md`))
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  }, [name]);

  return (
    <div id="blog" className="w-full mb-24 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <div
          className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline"
          onClick={goBack}
        >
          <FaChevronLeft /> Go back
        </div>
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
        <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
