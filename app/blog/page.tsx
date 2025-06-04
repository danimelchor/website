import BlogPostList from "@/_components/BlogPostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Melchor | Blog",
  description: "A personal collection of ideas",
};

export default function Blog() {
  return (
    <div id="blog" className="w-full pb-20 flex flex-col gap-10 gap-10">
      <div className="flex flex-col">
        <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors mb-3">
          Just another blog
        </h2>
        <h3 className="text-slate-800 dark:text-slate-200 text-2xl transition-colors mb-8">
          A collection of ideas and topics I'm interested in.
        </h3>

        <BlogPostList />
      </div>
    </div>
  );
}
