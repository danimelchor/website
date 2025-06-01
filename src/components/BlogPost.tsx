import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import moment from "moment";

type Article = {
  title: string;
  date: moment.Moment;
  readTime: string;
};

const ARTICLES: { [name: string]: Article } = {
  test: {
    title: "Testing a blog",
    date: moment("2025/05/31"),
    readTime: "10 min",
  },
};

function BlogPost({ name }: { name: string }) {
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
      <article className="prose prose-lg prose-slate dark:prose-invert prose-h1:mb-4">
        <h1>{article.title}</h1>
        <div className="flex gap-2">
          <span>{article.date.format("MMMM Do, YYYY")}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}

export default BlogPost;
