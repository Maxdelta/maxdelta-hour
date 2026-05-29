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
    href="/episodes/the-game-is-real"
    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition"
  >
    Listen / Episode Page
  </a>

  <a
    href="/blog/the-game-is-real"
    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
  >
    Read the Blog
  </a>

  <a
    href="https://discord.gg/6qXaEr7mnB"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-2 px-6 rounded-full transition"
  >
    Join the Discord
  </a>
</div>
<section className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl w-full">
  <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
    <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
      Episode
    </p>
    <h2 className="mt-3 text-2xl font-bold">The Game Is Real</h2>
    <p className="mt-3 text-gray-300">
      Gaming was the tutorial. Money is the resource system. Policy is the patch notes.
    </p>
    <a
      href="/episodes/the-game-is-real"
      className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
    >
      Episode / Show Notes →
    </a>
  </div>

  <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
    <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
      Blog
    </p>
    <h2 className="mt-3 text-2xl font-bold">Read the Article</h2>
    <p className="mt-3 text-gray-300">
      The written version of Episode 1, built for sharing and expanding the idea.
    </p>
    <a
      href="/blog/the-game-is-real"
      className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
    >
      Read the Blog →
    </a>
  </div>

  <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
    <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
      Shorts
    </p>
    <h2 className="mt-3 text-2xl font-bold">MaxDelta Briefs</h2>
    <p className="mt-3 text-gray-300">
      Short-form clips pulling the strongest lines from the show.
    </p>
    <a
      href="/briefs"
      className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
    >
      View the Briefs →
    </a>
  </div>
</section>
        

     

        <footer className="mt-20 text-sm text-gray-500">
          © 2025 The MaxDelta Hour • Site by RenderNorth
        </footer>
      </main>
    </>
  );
}
