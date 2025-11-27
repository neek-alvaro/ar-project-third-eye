"use client";
import dynamic from "next/dynamic";

const ARScene = dynamic(() => import("./components/ar-scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        <ARScene />
      </main>
    </div>
  );
}
