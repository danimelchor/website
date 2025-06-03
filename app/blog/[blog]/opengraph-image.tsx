import { getPost } from "@/lib/api";
import { ImageResponse } from "next/og";

export const alt = "Daniel Melchor";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { blog: string } }) {
  const article = await getPost(params.blog);
  return new ImageResponse(
    (
      <div className="w-full h-full bg-slate-100 flex flex-col justify-center p-10 text-slate-800">
        <p className="font-bold text-2xl">{article.title}</p>
        <p className="text-lg">{article.subtitle}</p>
      </div>
    ),

    {
      ...size,
    },
  );
}
