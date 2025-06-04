"use server";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import { getPost } from "@/lib/api";
import BlogPost, { BlogPostLoader } from "@/_components/BlogPost";
import { Metadata } from "next";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const post = getPost(blog);

  return (
    <div id="blog" className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <Link href="/blog">
          <div className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline">
            <FaChevronLeft /> Go back
          </div>
        </Link>

        <Suspense fallback={<BlogPostLoader />}>
          <BlogPost post={post} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}): Promise<Metadata> {
  const { blog } = await params;
  const post = await getPost(blog);
  return {
    title: post.title,
    description: post.subtitle,
  };
}
