"use server";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Spinner from "@/_components/Spinner";
import { Suspense } from "react";
import { getPost } from "@/lib/api";
import BlogPost from "@/_components/BlogPost";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const article = getPost(blog);

  return (
    <div id="blog" className="w-full mb-24 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <Link href="/blog">
          <div className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline">
            <FaChevronLeft /> Go back
          </div>
        </Link>

        <Suspense fallback={<Spinner title="Loading post" />}>
          <BlogPost post={article} />
        </Suspense>
      </div>
    </div>
  );
}
