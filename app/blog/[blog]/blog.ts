import moment from "moment";

export type ArticleType = "idea" | "observation";
export type ArticleState = "published" | "draft" | "not_started";

export interface Article {
  title: string;
  subtitle: string;
  date: moment.Moment;
  readTime: moment.Duration;
  type: ArticleType;
  state: ArticleState;
}

export const DATE_FMT = "MMMM Do, YYYY";
export const ARTICLES: Record<string, Article> = {
  high_performers: {
    title: "On being a good engineer",
    subtitle: "The single most-defining characteristic of high performers",
    date: moment.utc("2025-06-01"),
    readTime: moment.duration(2, "minutes"),
    type: "observation",
    state: "published",
  },
  probability_and_prejudice: {
    title: "Bayes theorem and prejudice",
    subtitle: "The conflict between mathematics and morality",
    date: moment.utc("2025-06-01"),
    readTime: moment.duration(8, "minutes"),
    type: "idea",
    state: "draft",
  },
};

export const ARTICLE_TYPE_COLOR: Record<ArticleType, string> = {
  idea: "blue",
  observation: "orange",
};
