import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function VideosRedirect() {
  useEffect(() => {
    window.location.href = "/watch";
  }, []);

  return (
    <>
      <Head>
        <title>Videos | The MaxDelta Hour</title>
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-extrabold">Videos moved to Watch</h1>

        <p className="mt-4 text-gray-300">
          Redirecting you to the video library.
        </p>

        <Link
          href="/watch"
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition"
        >
          Go to Video Library
        </Link>
      </main>
    </>
  );
}