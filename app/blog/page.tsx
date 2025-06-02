import BlogPostList from "@/_components/BlogPostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Melchor | Blog",
  description: "A personal collection of ideas",
};

export default function Blog() {
  return (
    <div id="blog" className="w-full mb-24 flex flex-col gap-10 gap-10">
      <BlogPostList />
    </div>
  );
}
