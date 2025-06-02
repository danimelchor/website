"use client";

import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@/providers/ThemeProvider";

function Markdown({ content }: { content: string }) {
  const { darkMode } = useTheme();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
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
            // @ts-ignore
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
