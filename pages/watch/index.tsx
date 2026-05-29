import Head from "next/head";
import Link from "next/link";

const videos = [
  {
    title: "Politics Is Patch Notes",
    tag: "MaxDelta Brief 001",
    description:
      "Politics is the update log for real life. You can ignore the patch notes, but the patch still affects your build.",
    video: "/videos/brief-001-politics-is-patch-notes.mp4",
  },
  {
    title: "Money Is Armor",
    tag: "MaxDelta Brief 002",
    description:
      "Money is armor, ammo, stamina, and fast travel. When you have no resources, bad RNG hits harder.",
    video: "/videos/brief-002-money-is-armor.mp4",
  },
  {
    title: "Stop Playing Like an NPC",
    tag: "MaxDelta Brief 003",
    description:
      "NPCs react. Players read the map, study incentives, and ask who benefits.",
    video: "/videos/brief-003-stop-playing-like-an-npc.mp4",
  },
];

export default function Watch() {
  return (
    <>
      <Head>
        <title>Watch | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Watch MaxDelta Briefs, podcast clips, and videos from The MaxDelta Hour."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            ← Back to The MaxDelta Hour
          </Link>

          <header className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Watch
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Video Library
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              MaxDelta Briefs, episode clips, and video content from The
              MaxDelta Hour.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-3 items-stretch">
  {videos.map((item) => (
    <article
      key={item.title}
      className="rounded-2xl border border-gray-800 bg-gray-950 p-6 flex flex-col h-full"
    >
      <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide">
        {item.tag}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white min-h-[64px]">
        {item.title}
      </h2>

      <p className="mt-3 text-gray-300 leading-7 min-h-[96px]">
        {item.description}
      </p>

      <div className="mt-6 flex-1 flex items-center justify-center">
        <div className="w-[230px] aspect-[9/16] overflow-hidden rounded-xl border border-gray-800 bg-black">
          <video
            muted
            playsInline
            preload="metadata"
            className="block h-full w-full object-cover"
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <a
        href={item.video}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition"
      >
        Watch Video
      </a>
    </article>
  ))}
</section>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4 border-t border-gray-800 pt-8">
            <Link
              href="/episodes/the-game-is-real"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition text-center"
            >
              Episode 1
            </Link>

            <Link
              href="/briefs"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition text-center"
            >
              Briefs + Scripts
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