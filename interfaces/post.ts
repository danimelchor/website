export type ArticleType = "idea" | "observation";
export type ArticleState = "published" | "draft" | "not started";
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  read: string;
  type: ArticleType;
  state: ArticleState;
  content: string;
}
