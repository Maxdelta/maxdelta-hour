import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
  <title>The MaxDelta Hour</title>
  <meta name="description" content="Politics. Gaming. Finance. Culture. No Filters." />
  <link rel="icon" href="/favicon.ico" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="The MaxDelta Hour" />
  <meta property="og:description" content="Unfiltered commentary on politics, gaming, finance, and culture. Hosted by MaxDelta." />
  <meta property="og:image" content="https://maxdelta-hour.vercel.app/og-preview.jpg" />
  <meta property="og:url" content="https://maxdelta-hour.vercel.app" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The MaxDelta Hour" />
  <meta name="twitter:description" content="Unfiltered commentary on politics, gaming, finance, and culture. Hosted by MaxDelta." />
  <meta name="twitter:image" content="https://maxdelta-hour.vercel.app/og-preview.jpg" />
</Head>


      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
        <img
          src="/logo.png"
          alt="MaxDelta Logo"
          className="w-40 h-40 mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          The MaxDelta Hour
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-xl">
          🎙️ Politics. Gaming. Finance. Culture. No Filters.  
          Hosted by veteran and investor MaxDelta.
        </p>

        <p className="mt-8 text-yellow-400 text-lg font-semibold uppercase tracking-wide">
  Episode 1: The Game Is Real
</p>

<p className="mt-3 text-gray-300 max-w-xl">
  Gaming was the tutorial. Money is the resource system. Policy is the patch notes.
  Culture is the story mode.
</p>

<div className="mt-6 flex flex-col sm:flex-row gap-4">
  <a
    href="/blog/the-game-is-real"
    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
  >
    Read the Blog
  </a>

 
</div>

        <a
          href="https://discord.gg/6qXaEr7mnB"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
        >
          Join the Discord
        </a>

        <form className="mt-10 w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-l-md text-black"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-r-md"
          >
            Notify Me
          </button>
        </form>

        <footer className="mt-20 text-sm text-gray-500">
          © 2025 The MaxDelta Hour • Site by RenderNorth
        </footer>
      </main>
    </>
  );
}
