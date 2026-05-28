import Head from "next/head";
import Link from "next/link";

export default function EpisodeOneTheGameIsReal() {
  return (
    <>
      <Head>
        <title>Episode 1: The Game Is Real | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Episode 1 of The MaxDelta Hour connects gaming, money, policy, and culture through one idea: the game is real."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            ← Back to The MaxDelta Hour
          </Link>

          <header className="text-center mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              The MaxDelta Hour
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Episode 1: The Game Is Real
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Gaming was the tutorial. Money is the resource system. Policy is
              the patch notes. Culture is the story mode.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-12">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Podcast Audio
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Audio Coming Soon
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              This episode page is ready for the podcast audio. Once Episode 1
              is recorded, the audio player will go here.
            </p>

            <div className="mt-6 rounded-xl bg-black border border-gray-800 p-5 text-gray-500">
              Audio player placeholder
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <h2 className="text-2xl font-bold text-white">Episode Thesis</h2>
              <p className="mt-4 text-gray-300 leading-7">
                Life has systems, incentives, winners, losers, exploits, and a
                whole lot of people pretending none of it is connected.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <h2 className="text-2xl font-bold text-white">Core Line</h2>
              <p className="mt-4 text-yellow-400 text-xl font-bold leading-8">
                Life is pay-to-win, but strategy still matters.
              </p>
            </div>
          </section>

          <section className="space-y-8 text-lg leading-8 text-gray-200">
            <div>
              <h2 className="text-3xl font-bold text-white">Show Notes</h2>
              <p className="mt-4">
                In Episode 1 of The MaxDelta Hour, MaxDelta connects gaming,
                money, policy, and culture into one simple idea: the game is
                real.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                1. Gaming Was the Tutorial
              </h3>
              <p className="mt-3">
                Games teach systems, incentives, grind loops, bad builds, broken
                metas, and why effort without strategy can still lose.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                2. Money Is the Resource System
              </h3>
              <p className="mt-3">
                Money is armor, ammo, stamina, fast travel, and the resource
                that gives players more options when life throws bad RNG.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                3. Policy Is the Patch Notes
              </h3>
              <p className="mt-3">
                Tax policy, interest rates, regulations, trade, energy, crime,
                and education all change the real-life meta.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                4. Culture Is the Story Mode
              </h3>
              <p className="mt-3">
                Culture tells people who the heroes are, who the villains are,
                what is normal, and what future they should expect.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                5. Stop Playing Like an NPC
              </h3>
              <p className="mt-3">
                The episode closes with a call to read the patch notes, build
                your stats, stack your resources, find your faction, and start
                playing to win.
              </p>
            </div>
          </section>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 border-t border-gray-800 pt-8">
            <Link
              href="/blog/the-game-is-real"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition text-center"
            >
              Read the Blog Post
            </Link>

            <a
              href="https://discord.gg/6qXaEr7mnB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-full transition text-center"
            >
              Join the Discord
            </a>
          </div>
        </div>
      </main>
    </>
  );
}