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
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {article.title}
      </div>
    ),
    {
      ...size,
    },
  );
}
