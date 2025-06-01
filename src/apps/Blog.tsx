import classNames from "classnames";
import BlogPost, {
  ARTICLES,
  DATE_FMT,
  Article,
  ArticleType,
} from "components/BlogPost";
import { useEffect, useState } from "react";
import { FaEye, FaLightbulb } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  COLOR_TO_BG,
  COLOR_TO_IMG_BG,
  COLOR_TO_SHADOW,
  COLOR_TO_TEXT_COLOR,
} from "./colors";

export const ARTICLE_TYPE_COLOR: Record<ArticleType, string> = {
  idea: "blue",
  observation: "orange",
};
export const ARTICLE_TYPE_ICON: Record<ArticleType, IconType> = {
  idea: FaLightbulb,
  observation: FaEye,
};

const BlogPostItem = ({
  article,
  selectArticle,
}: {
  article: Article;
  selectArticle: () => void;
}) => {
  const color = ARTICLE_TYPE_COLOR[article.type];
  const Icon = ARTICLE_TYPE_ICON[article.type];

  return (
    <div
      className={classNames(
        "flex flex-col p-4 rounded-xl p-5 lg:p-10 bg-gradient-to-t from-transparent group cursor-pointer",
        COLOR_TO_BG[color],
      )}
      onClick={selectArticle}
    >
      <div className="flex gap-3 lg:gap-5 items-center lg:items-start">
        <div
          className={classNames(
            "w-10 h-10 lg:w-12 lg:h-12 rounded-md shadow-lg mb-2 lg:mb-0 flex flex-none items-center justify-center",
            COLOR_TO_SHADOW[color],
            COLOR_TO_IMG_BG[color],
          )}
        >
          <Icon className="text-slate-800 dark:text-slate-200 text-2xl" />
        </div>
        <div className="flex flex-col">
          <div
            className={classNames(
              "text-xl font-bold lg:group-hover:underline",
              COLOR_TO_TEXT_COLOR[color],
            )}
          >
            {article.title}
          </div>
          <div className="text-lg text-slate-800 dark:text-slate-200">
            {article.subtitle}
          </div>
          <div className="text-slate-700 dark:text-slate-400 flex gap-2 mt-2">
            <span>{article.date.format(DATE_FMT)}</span>
            <span>•</span>
            <span>{article.readTime.humanize()} read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function BlogPostList({
  setSelectedArticle,
}: {
  setSelectedArticle: (a: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors mb-3">
        Nuggets
      </h2>
      <h3 className="text-slate-800 dark:text-slate-200 text-2xl transition-colors mb-8">
        A collection of ideas and topics I'm interested in.
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(ARTICLES).map((a, idx) => (
          <BlogPostItem
            article={ARTICLES[a]}
            key={idx}
            selectArticle={() => setSelectedArticle(a)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Blog({ open }: { open: boolean }) {
  const [selectedArticle, setSelectedArticle] = useState<string>();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const article = urlParams.get("article");
    setSelectedArticle(article ?? undefined);
  }, [open]);

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    if (selectedArticle) {
      urlParams.set("article", selectedArticle!);
    } else {
      urlParams.delete("article");
    }

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${urlParams.toString()}`,
    );
  }, [selectedArticle]);

  if (selectedArticle) {
    return (
      <BlogPost
        name={selectedArticle}
        goBack={() => setSelectedArticle(undefined)}
      />
    );
  }

  return (
    <div id="blog" className="w-full mb-24 flex flex-col gap-10 gap-10">
      <BlogPostList setSelectedArticle={setSelectedArticle} />
    </div>
  );
}
