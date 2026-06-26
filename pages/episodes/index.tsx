import Head from "next/head";
import Link from "next/link";

const episodes = [
  {
    number: "Episode 5",
    title: "Adjust Fire: Michigan's Housing Crisis",
    description:
      "Michigan keeps talking about building more housing, but the real problem is deeper than supply alone. Vacant homes, local control, infrastructure, affordability, and why fixing what we already have may matter more than building everywhere.",
    href: "/episodes/adjust-fire-michigan-housing",
    status: "Newest Episode",
  },
  {
    number: "Episode 4",
    title: "The Fog of War",
    description:
      "How to think when everyone wants you angry. Rage, context, AI, team loyalty, and learning to read the map before you move.",
    href: "/episodes/the-fog-of-war",
    status: "Episode 4",
  },
  {
    number: "Episode 3",
    title: "Build Your Base",
    description:
      "If the game is real, and the patch notes are real, then you need a base. A website, a skill stack, a money plan, a community, and a place you control.",
    href: "/episodes/build-your-base",
    status: "Episode 3",
  },
  {
    number: "Episode 2",
    title: "The Patch Notes Are Real",
    description:
      "Elections, AI, money, culture, platforms, trust, and the rules changing while people sleep.",
    href: "/episodes/the-patch-notes-are-real",
    status: "Episode 2",
  },
  {
    number: "Episode 1",
    title: "The Game Is Real",
    description:
      "Gaming was the tutorial. Money is the resource system. Policy is the patch notes. Culture is the story mode.",
    href: "/episodes/the-game-is-real",
    status: "Start Here",
  },
];

export default function Episodes() {
  return (
    <>
      <Head>
        <title>Episodes | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Listen to episodes of The MaxDelta Hour."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            Back to The MaxDelta Hour
          </Link>

          <header className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              The Archive
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Episodes
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Every episode of The MaxDelta Hour — politics, gaming, money,
              culture, technology, and real-life systems.
            </p>
          </header>

          <section className="grid gap-6">
            {episodes.map((episode) => (
              <article
                key={episode.title}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8"
              >
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                  {episode.status}
                </p>

                <p className="mt-3 text-gray-500 font-semibold">
                  {episode.number}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {episode.title}
                </h2>

                <p className="mt-4 text-gray-300 text-lg leading-8">
                  {episode.description}
                </p>

                <Link
                  href={episode.href}
                  className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition text-center"
                >
                  Listen Now
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}