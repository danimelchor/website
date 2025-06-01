import BlogPost, { ARTICLES, DATE_FMT, Article } from "components/BlogPost";
import { useState } from "react";

const BlogPostItem = ({
  article,
  selectArticle,
}: {
  article: Article;
  selectArticle: () => void;
}) => {
  return (
    <div
      className="flex flex-col border rounded-md border-slate-500 p-4"
      onClick={selectArticle}
    >
      <div className="text-xl dark:text-white font-bold">{article.title}</div>
      <div className="text-lg dark:text-white">{article.subtitle}</div>
      <div className="text-slate-600 dark:text-slate-300 flex gap-2">
        <span>{article.date.format(DATE_FMT)}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>
    </div>
  );
};

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<string>();

  return (
    <div id="blog" className="w-full mb-24 flex flex-col gap-10 p-10 gap-10">
      {selectedArticle && (
        <BlogPost
          name={selectedArticle}
          goBack={() => setSelectedArticle(undefined)}
        />
      )}
      {!selectedArticle && (
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(ARTICLES).map((a, idx) => (
            <BlogPostItem
              article={ARTICLES[a]}
              key={idx}
              selectArticle={() => setSelectedArticle(a)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
