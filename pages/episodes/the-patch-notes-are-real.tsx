import Head from "next/head";
import Link from "next/link";

export default function EpisodeTwo() {
  return (
    <>
      <Head>
        <title>Episode 2: The Patch Notes Are Real | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Episode 2 of The MaxDelta Hour. The patch notes are real: elections, AI, money, culture, platforms, and the rules changing while people sleep."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            ← Back to The MaxDelta Hour
          </Link>

          <header className="mb-10">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Episode 2
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              The Patch Notes Are Real
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-8 max-w-4xl">
              Elections. AI. Money. Culture. Platforms. Trust. The rules are
              changing in real time, and most people are still acting like they
              are playing the launch version of the game.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-12">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Podcast Audio
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Listen to Episode 2
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              The patch notes are real. The scoreboard matters. The rules
              change. The meta changed. AI is not waiting. The economy is not
              waiting. So why the hell are you?
            </p>

            <audio controls className="mt-6 w-full">
              <source
                src="/audio/episode-2-the-patch-notes-are-real.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </section>

          <section className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <h2 className="text-2xl font-bold">Episode Thesis</h2>

              <p className="mt-5 text-gray-300 leading-8">
                The rules are changing everywhere: politics, elections, AI,
                money, culture, platforms, media, and institutions. Most people
                feel the impact before they ever understand the update.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <h2 className="text-2xl font-bold">Core Line</h2>

              <p className="mt-5 text-yellow-400 text-xl font-bold leading-8">
                The patch notes are real. And if you are not reading them,
                somebody else is building around them.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-extrabold">Show Notes</h2>

            <p className="mt-6 text-gray-300 leading-8 max-w-4xl">
              Episode 1 introduced the idea that the game is real. Episode 2
              starts looking at the screen. This episode is about the patch
              notes people are living through whether they read them or not.
            </p>

            <div className="mt-10 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  1. The Scoreboard Has to Be Trusted
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  Elections are the scoreboard of democracy. If the scoreboard
                  looks strange, people are going to ask questions. That does
                  not automatically mean fraud. It means the system needs to
                  explain itself clearly, quickly, and with receipts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  2. Weird-Looking Systems Need Clear Explanations
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  A system that requires public trust cannot operate like a
                  black box and then get mad when people ask questions. Trust is
                  not built by telling people to shut up. Trust is built by
                  showing the work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  3. AI Is a Meta Shift
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  AI is not just a tool. It is a weapon tree update, a
                  production multiplier, a skill amplifier, and a replacement
                  engine if people refuse to adapt. The question is not whether
                  AI is good or bad. The question is how it changes the meta.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  4. Money Is Where People Feel the Patch Notes First
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  Interest rates, inflation, taxes, insurance, groceries, credit,
                  rent, and debt are real-life rule changes. People might not
                  know the technical terms, but they know when the grind got
                  harder.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  5. Stop Playing Like an NPC
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  The episode closes with a call to read the patch notes, build
                  your stats, stack your resources, find your faction, and stop
                  getting farmed by systems you refuse to understand.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-800 pt-8">
            <section className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                  Archive
                </p>

                <h2 className="mt-3 text-2xl font-bold">All Episodes</h2>

                <p className="mt-3 text-gray-300">
                  Browse Episode 1, Episode 2, and future drops from The
                  MaxDelta Hour.
                </p>

                <Link
                  href="/episodes"
                  className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
                >
                  Browse Episodes →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                  Start Here
                </p>

                <h2 className="mt-3 text-2xl font-bold">The Game Is Real</h2>

                <p className="mt-3 text-gray-300">
                  Episode 1 lays the foundation: gaming was the tutorial, money
                  is the resource system, and policy is the patch notes.
                </p>

                <Link
                  href="/episodes/the-game-is-real"
                  className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
                >
                  Listen to Episode 1 →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left flex flex-col h-full">
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                  Watch
                </p>

                <h2 className="mt-3 text-2xl font-bold">Video Library</h2>

                <p className="mt-3 text-gray-300">
                  MaxDelta Briefs, episode clips, and short-form video content
                  from the show.
                </p>

                <Link
                  href="/videos"
                  className="mt-auto pt-6 inline-block text-yellow-400 font-bold hover:text-yellow-300"
                >
                  Watch Videos →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}