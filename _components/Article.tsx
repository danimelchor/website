import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article className="prose lg:prose-lg max-w-none prose-slate dark:prose-invert prose-h1:mb-4 text-justify">
      {children}
    </article>
  );
}
