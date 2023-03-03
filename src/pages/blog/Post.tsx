import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import "../../styles/blog.scss";

import { Link, useParams } from "react-router-dom";

import { GoChevronLeft } from "react-icons/go";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { ghcolors, nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import { POSTS_LIST, PostType } from "../../data/posts";

// POST COMPONENT
export default function Post() {
  const [post, setPost] = useState("");
  const [postname, setPostname] = useState("");
  const [info, setInfo] = useState<PostType | undefined>();

  const params = useParams();

  useEffect(() => {
    const post_path = params.post;

    import(`../../data/posts/${post_path}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => {
          setPost(res);
          setPostname(post_path || "");
          setInfo(POSTS_LIST[post_path || ""]);
        });
    });
  }, [params]);

  if (post === undefined || info === undefined) return <></>;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
      <div
        className="overflow-hidden flex-col lg:flex-row flex lg:justify-center w-full relative bg-gray-800"
        style={
          window.innerWidth > 640 ? { height: "65vh" } : { height: "100vw" }
        }
      >
        <Link
          to="/"
          className="lg:absolute w-full lg:w-auto left-0 top-0 p-5 z-50 text-white font-black text-lg sm:text-xl hover:text-gray-300 hover:underline"
        >
          danielmelchor.com
        </Link>
        <img
          src={`/blog/img/${postname}.png`}
          className="md:h-full filter transform p-4"
          alt={postname + " header image"}
          loading="lazy"
        />
      </div>
      <div className="w-full lg:w-1/2 xl:w-5/12 w-full h-full p-6 lg:p-10">
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/blog"
            className="text-blue-500 flex items-center hover:text-blue-600 hover:underline"
          >
            <GoChevronLeft />
            Go back
          </Link>
          <div className="flex items-center">
            {info["towardsDataLink"] && (
              <a
                href={info["link"]}
                style={{ backgroundColor: "#355876" }}
                className="px-4 py-1 text-white rounded-full transition-transform hover:scale-105 transform"
              >
                {window.innerWidth > 640
                  ? "See on Towards Data Science"
                  : "See on TDS"}
              </a>
            )}
          </div>
        </div>
        <div id="blog-post">
          <ReactMarkdown
            children={post}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={localStorage.getItem("theme") === "light" ? ghcolors : nord}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                    customStyle={{
                      marginBottom: "20px",
                    }}
                    showLineNumbers={true}
                    showInlineLineNumbers={true}
                  />
                ) : (
                  <code className={className} {...props}>{children}</code>
                );
              },
            }}
            transformImageUri={(uri) =>
              uri.startsWith("http") ? uri : `/blog/${postname}/${uri}`
            }
          />
        </div>
      </div>
    </div>
  );
}
