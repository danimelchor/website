export type PostType = "idea" | "observation";
export type PostState = "published" | "draft" | "not started";
export interface Post {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  read: string;
  type: PostType;
  state: PostState;
  content: string;
}
