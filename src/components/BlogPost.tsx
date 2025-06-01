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
    readTime: moment.duration(10, "minutes"),
    type: "observation",
    state: "draft",
  },
  probability_and_prejudice: {
    title: "Bayes theorem and prejudice",
    subtitle: "The conflict between mathematics and morality",
    date: moment("2025/06/01"),
    readTime: moment.duration(8, "minutes"),
    type: "idea",
    state: "not_started",
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
        <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
          <h1>{article.title}</h1>
          <div className="flex gap-2">
            <span>{article.date.format(DATE_FMT)}</span>
            <span>•</span>
            <span>{article.readTime.humanize()} read</span>
          </div>
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
