import { getPost } from "@/lib/api";
import { ImageResponse } from "next/og";

export const alt = "Daniel Melchor";
export const size = {
  width: 800,
  height: 200,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { post: string } }) {
  const post = await getPost(params.post);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f1f5f9", // bg-slate-100
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2.5rem", // p-10
          color: "#1e293b", // text-slate-800
        }}
      >
        <p
          style={{
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "2rem" /* text-2xl */,
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            fontSize: "1.3rem" /* text-lg */,
          }}
        >
          {post.subtitle}
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
