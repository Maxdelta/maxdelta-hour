import Head from "next/head";
import Link from "next/link";

const briefs = [
  {
    title: "Politics Is Patch Notes",
    tag: "Brief 001",
    video: "/media/brief-001-politics-is-patch-notes.mp4",
    description:
      "Politics is not just people yelling on TV. It is the update log for real life.",
    script: [
      "Politics is not just people yelling on TV.",
      "Politics is patch notes.",
      "When tax policy changes, the game changes.",
      "When interest rates move, the game changes.",
      "When energy policy changes, prices change.",
      "When trade policy changes, supply chains change.",
      "You can say, “I do not care about politics.”",
      "That is fine.",
      "But that is like playing an online game and refusing to read the patch notes.",
      "You can ignore the update.",
      "The update is still going to affect your build.",
    ],
  },
  {
    title: "Money Is Armor",
    tag: "Brief 002",
    video: "/media/brief-002-money-is-armor.mp4",
    description:
      "Money is not everything, but it changes how hard life hits when the RNG goes bad.",
    script: [
      "Money is not everything.",
      "But money is armor.",
      "Money is ammo.",
      "Money is stamina.",
      "Money is fast travel.",
      "Money is how you survive bad RNG.",
      "When you have no money, every mistake hits harder.",
      "A flat tire becomes a crisis.",
      "A missed check becomes a spiral.",
      "Bad debt becomes a debuff.",
      "That is why financial literacy matters.",
      "Because if you do not understand the money system, you are not playing the game.",
      "You are getting farmed.",
    ],
  },
  {
    title: "Stop Playing Like an NPC",
    tag: "Brief 003",
    video: "/media/brief-003-stop-playing-like-an-npc.mp4",
    description:
      "NPCs react. Players read the map, study incentives, and ask who benefits.",
    script: [
      "NPC mode is when you let everyone else think for you.",
      "The media tells you what matters.",
      "Politicians tell you who to hate.",
      "Corporations tell you what to buy.",
      "Algorithms tell you what to feel.",
      "Player mode is different.",
      "Player mode asks:",
      "Who benefits?",
      "What changed?",
      "What is the incentive?",
      "What is the risk?",
      "What is the opportunity?",
      "That is the difference.",
      "NPCs react.",
      "Players read the map.",
    ],
  },
];

export default function MaxDeltaBriefs() {
  return (
    <>
      <Head>
        <title>MaxDelta Briefs | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Short-form clips from The MaxDelta Hour covering politics, gaming, money, culture, and real life."
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

          <header className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Short-Form Clips
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              MaxDelta Briefs
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Fast hits from The MaxDelta Hour — politics, gaming, money,
              culture, and the real-life systems most people pretend are not
              connected.
            </p>
          </header>

          <section className="grid gap-8">
            {briefs.map((brief) => (
              <article
                key={brief.title}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8"
              >
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                  {brief.tag}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {brief.title}
                </h2>

                <p className="mt-4 text-gray-300 text-lg leading-8">
                  {brief.description}
                </p>
                {brief.video && (
            <video
               controls
                  className="mt-6 w-full rounded-xl border border-gray-800 bg-black"
  >
            <source src={brief.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

                <div className="mt-6 rounded-xl border border-gray-800 bg-black p-5">
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
                    Clip Script
                  </p>

                  <div className="space-y-3 text-gray-200 leading-7">
                    {brief.script.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4 border-t border-gray-800 pt-8">
            <Link
              href="/episodes/the-game-is-real"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition text-center"
            >
              Episode 1 Show Notes
            </Link>

            <Link
              href="/blog/the-game-is-real"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition text-center"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
