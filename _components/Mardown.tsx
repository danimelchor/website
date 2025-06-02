"use client";

import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@/providers/ThemeProvider";
import "katex/dist/katex.min.css";

function Markdown({ content }: { content: string }) {
  const { darkMode } = useTheme();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        rehypeKatex,
        [rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" }],
      ]}
      components={{
        pre(props) {
          const { node, ...rest } = props;
          return <pre className="not-prose" {...rest} />;
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            // @ts-expect-error - The rest props do not exactly match
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={darkMode ? oneDark : oneLight}
              customStyle={{ fontSize: "1rem" }}
              showLineNumbers
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default Markdown;
