import Head from "next/head";
import Link from "next/link";

export default function BuildYourBase() {
  return (
    <>
      <Head>
        <title>Episode 3: Build Your Base | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Episode 3 of The MaxDelta Hour: Build Your Base. If the game is real and the patch notes are real, then you need a base."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/episodes"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            ← Back to Episodes
          </Link>

          <header className="text-center mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Episode 3
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Build Your Base
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              If the game is real, and the patch notes are real, then you need a
              base. A home system. A place you control.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Listen to Episode 3</h2>

            <audio controls className="w-full">
              <source
                src="/audio/episode-3-build-your-base.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>

            <p className="mt-4 text-gray-400 text-sm">
              Intro music: Drum Or Bass by Ryan Stasik. Outro music: The Last
              Oasis by The Grey Room / Density & Time.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Episode Thesis
              </p>

              <h2 className="mt-3 text-2xl font-bold">Build Your Base</h2>

              <p className="mt-4 text-gray-300 leading-8">
                A website. A skill stack. A money plan. A community. A place
                where your work lives that is not completely controlled by
                someone else&apos;s algorithm.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Core Line
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                The base does not build itself.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                The game is real. The patch notes are real. And if both of
                those things are true, wandering around exposed is not bravery.
                It is bad strategy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Sponsored By
            </p>

            <div className="mt-4 rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8">
              <h2 className="text-3xl font-bold">RenderNorth</h2>

              <p className="mt-4 text-gray-300 leading-8 text-lg">
                Custom websites in three days or less for businesses, creators,
                gamers, streamers, local services, side hustles, and projects
                that need a real home base online.
              </p>

              <a
                href="https://www.rendernorth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Visit RenderNorth
              </a>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide mb-6">
              Show Notes
            </p>

            <div className="space-y-10 text-gray-300 text-lg leading-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">1.</span> Why Everyone
                  Needs a Base
                </h2>
                <p className="mt-3">
                  Your base is the part of your life that gives you stability
                  when the world starts acting stupid. Skills, money, tools,
                  health, reputation, community, and your online home all matter.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">2.</span> Algorithms Are
                  Rented Land
                </h2>
                <p className="mt-3">
                  Social platforms are powerful, but they are not your land.
                  YouTube, TikTok, Facebook, Twitch, X, and Instagram are
                  outposts. Useful, but unstable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">3.</span> Your Website Is
                  Your Home System
                </h2>
                <p className="mt-3">
                  A website is not just a digital business card. It is your map
                  room, archive, mission board, contact point, storefront, radio
                  tower, and proof of work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">4.</span> Skills, Money,
                  and Community
                </h2>
                <p className="mt-3">
                  Skills make you portable. Money gives you options. Community
                  keeps the fire going. A strong base is not built from one
                  thing. It is a system.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">5.</span> The First Version
                  Is Allowed to Be Rough
                </h2>
                <p className="mt-3">
                  Perfect is a trap. Build the first version, patch the weak
                  spots, upgrade the walls, and keep moving. You cannot improve
                  something that does not exist.
                </p>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            <Link
              href="/episodes"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Archive
              </p>
              <h3 className="mt-3 text-2xl font-bold">All Episodes</h3>
              <p className="mt-3 text-gray-400">
                Go back through every episode of The MaxDelta Hour.
              </p>
            </Link>

            <Link
              href="/videos"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Watch
              </p>
              <h3 className="mt-3 text-2xl font-bold">Video Library</h3>
              <p className="mt-3 text-gray-400">
                Watch MaxDelta Briefs and video clips from the show.
              </p>
            </Link>

            <a
              href="https://discord.gg/6qXaEr7mnB"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition"
            >
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Community
              </p>
              <h3 className="mt-3 text-2xl font-bold">Join Discord</h3>
              <p className="mt-3 text-gray-400">
                Come build the base with the MaxDelta community.
              </p>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}