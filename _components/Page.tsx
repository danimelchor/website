"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Notification from "@/_components/Notification";
import Dock from "@/_components/Dock";
import Background from "@/_components/Background";
import App from "@/_components/App";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode, useState } from "react";

const queryClient = new QueryClient();

export default function Page({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="w-screen h-full flex flex-col justify-between items-center relative overflow-hidden">
          <Background />
          <div className="w-full h-full relative z-10 pointer-events-none">
            <App open={open} setOpen={setOpen}>
              {children}
            </App>
          </div>
          <Notification />
          <Dock setOpen={setOpen} />
        </div>{" "}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
