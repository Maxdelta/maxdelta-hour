import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>The MaxDelta Hour</title>
        <meta
          name="description"
          content="The MaxDelta Hour - politics, gaming, money, culture, technology, and real-life systems."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center">
            <img
              src="/logo-main.png"
              alt="The MaxDelta Hour logo"
              className="mx-auto w-40 h-40 object-contain mb-6"
            />

            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              The MaxDelta Hour
            </p>

            <h1 className="mt-4 text-4xl md:text-7xl font-extrabold leading-tight">
              Politics. Gaming. Money.
              <br />
              Culture. Systems.
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              The game is real. The patch notes are real. Build your base.
              Read the map.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/episodes/michigans-260-million-empty-field"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Listen to Episode 6
              </Link>

              <Link
                href="/episodes"
                className="border border-gray-700 hover:border-yellow-500 text-white font-bold py-3 px-6 rounded-full transition"
              >
                All Episodes
              </Link>

              <a
                href="https://discord.gg/6qXaEr7mnB"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 hover:border-yellow-500 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Join the Discord
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="https://www.youtube.com/@maxdelta97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 font-semibold transition"
              >
                YouTube
              </a>

              <span className="text-gray-700">|</span>

              <a
                href="https://www.tiktok.com/@maxdelta_briefs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-semibold transition"
              >
                TikTok
              </a>

              <span className="text-gray-700">|</span>

              <a
                href="https://www.twitch.tv/maxdeltaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 font-semibold transition"
              >
                Twitch
              </a>

              <span className="text-gray-700">|</span>

              <a
                href="https://discord.gg/6qXaEr7mnB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 font-semibold transition"
              >
                Discord
              </a>
            </div>
          </header>

          <section className="mt-16 rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8">
            <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
              Newest Episode
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
                Episode 6: Michigan&apos;s $260 Million Empty Field
            </h2>

            <p className="mt-5 text-gray-300 text-lg leading-8 max-w-4xl">
                Michigan invested hundreds of millions preparing a Genesee County megasite for a proposed semiconductor project. The original anchor project fell through, but the bigger story isn't what happened to one company—it's what taxpayers deserve to know when public money is put at risk.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                  href="/episodes/michigans-260-million-empty-field"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition"
              >
                  Listen Now
              </Link>

              <Link
                href="/episodes"
                className="border border-gray-700 hover:border-yellow-500 text-white font-bold py-3 px-6 rounded-full transition"
              >
                View the Archive
              </Link>

              <a
                href="https://open.spotify.com/show/033CNPXSjIfZtnyT1hUrwt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Follow on Spotify
              </a>
            </div>
          </section>

          <section className="mt-10 grid md:grid-cols-3 gap-6">
            <Link
              href="/episodes"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Archive
              </p>

              <h3 className="mt-3 text-2xl font-bold">All Episodes</h3>

              <p className="mt-3 text-gray-400 leading-7">
                Start from Episode 1 or catch up on every episode of The
                MaxDelta Hour.
              </p>
            </Link>

            <Link
              href="/videos"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Video Library
              </p>

              <h3 className="mt-3 text-2xl font-bold">Watch the Briefs</h3>

              <p className="mt-3 text-gray-400 leading-7">
                Short-form MaxDelta Briefs pulled from the bigger ideas in the
                show.
              </p>
            </Link>

            <a
              href="https://www.rendernorth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Sponsor
              </p>

              <h3 className="mt-3 text-2xl font-bold">RenderNorth</h3>

              <p className="mt-3 text-gray-400 leading-7">
                Custom websites in three days or less for businesses, creators,
                gamers, streamers, and side hustles.
              </p>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}