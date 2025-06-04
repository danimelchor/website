"use server";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { getPost } from "@/lib/api";
import BlogPost from "@/_components/BlogPost";
import { Metadata } from "next";

export default async function BlogPostPage() {
  return (
    <div id="blog" className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <Link href="/blog">
          <div className="flex items-center gap-2 dark:text-white mb-4 cursor-pointer hover:underline">
            <FaChevronLeft /> Go back
          </div>
        </Link>

        <BlogPost />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}): Promise<Metadata> {
  const { post } = await params;
  const postInfo = await getPost(post);
  return {
    title: postInfo.title,
    description: postInfo.subtitle,
  };
}
