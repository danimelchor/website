import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import moment from "moment";
import { FaChevronLeft } from "react-icons/fa";

export type Article = {
  title: string;
  subtitle: string;
  date: moment.Moment;
  readTime: string;
};

export const DATE_FMT = "MMMM Do, YYYY";
export const ARTICLES: { [name: string]: Article } = {
  test: {
    title: "Testing a blog",
    subtitle: "A detailed guide to writing blog posts",
    date: moment("2025/05/31"),
    readTime: "10 min",
  },
  test2: {
    title: "Testing a blog 2",
    subtitle: "A detailed guide to writing blog posts",
    date: moment("2025/05/31"),
    readTime: "10 min",
  },
  test3: {
    title: "Testing a blog 3",
    subtitle: "A detailed guide to writing blog posts",
    date: moment("2025/05/31"),
    readTime: "10 min",
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
    <div>
      <div
        className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline"
        onClick={goBack}
      >
        <FaChevronLeft /> Go back
      </div>
      <article className="prose prose-lg prose-slate dark:prose-invert prose-h1:mb-4">
        <h1>{article.title}</h1>
        <div className="flex gap-2">
          <span>{article.date.format(DATE_FMT)}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}

export default BlogPost;
