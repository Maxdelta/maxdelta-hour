import Head from "next/head";
import Link from "next/link";

export default function TheFogOfWar() {
  return (
    <>
      <Head>
        <title>Episode 4: The Fog of War | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Episode 4 of The MaxDelta Hour: The Fog of War. How to think when everyone wants you angry."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/episodes"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            Back to Episodes
          </Link>

          <header className="text-center mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">
              Episode 4
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              The Fog of War
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              How to think when everyone wants you angry.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Listen to Episode 4</h2>

            <audio controls className="w-full">
              <source
                src="/audio/episode-4-the-fog-of-war.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>

            <p className="mt-4 text-gray-400 text-sm">
              Intro music: Beast Mode by The Soundings. Outro music: True Crime
              Documentary and Chill by Rod Kim.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Episode Thesis
              </p>

              <h2 className="mt-3 text-2xl font-bold">The Fog of War</h2>

              <p className="mt-4 text-gray-300 leading-8">
                Every day, somebody is trying to hand you a clip, a caption, a
                villain, and a reason to be angry before you have time to think.
                This episode is about slowing down long enough to read the map.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Core Line
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Being first is not the same as being right.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Your attention is a battlefield. Your anger is a resource. Your
                trust is being competed for. Do not let the fog do your thinking
                for you.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide mb-6">
              Episode Briefing
            </p>

            <div className="space-y-10 text-gray-300 text-lg leading-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">1.</span> Rage Is a
                  Business Model
                </h2>
                <p className="mt-3">
                  Outrage moves. Fear moves. A dramatic clip, a strong caption,
                  and a target to blame can spread faster than a careful
                  explanation. That is not an accident. It is the machine doing
                  what it was designed to do.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">2.</span> The First Casualty
                  Is Context
                </h2>
                <p className="mt-3">
                  A quote can be real. A video can be real. A statistic can be
                  real. And all three can still be used to tell you a lie when
                  the missing context changes what actually happened.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">3.</span> Read the Map
                  Before You Move
                </h2>
                <p className="mt-3">
                  Ask what you actually know, what is missing, who benefits if
                  you believe it immediately, what would change your mind, and
                  what happens if you are wrong.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">4.</span> When Teams Replace
                  Thinking
                </h2>
                <p className="mt-3">
                  The real test is whether you use the same standard for people
                  you agree with that you use for people you do not. Defending a
                  principle is different from defending a jersey.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">5.</span> AI and the New Fog
                </h2>
                <p className="mt-3">
                  AI is an incredible tool, but it is also making fake,
                  manipulated, and contextless content more convincing. In a
                  world full of synthetic noise, trust and discernment become
                  armor.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">6.</span> Do Not Become the
                  Fog
                </h2>
                <p className="mt-3">
                  Speak. Have principles. Take positions. But do not build
                  attention by pretending certainty you have not earned. Use
                  your voice like it matters, because it does.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8 mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
              The Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Be hard to manipulate. Be hard to bait. Be hard to rush.
            </h2>

            <p className="mt-4 text-gray-300 text-lg leading-8">
              You do not owe the algorithm your first thought. You do not owe
              the crowd your immediate anger. Sometimes the smartest person in
              the fog of war is the one who waits long enough to see where the
              ambush is.
            </p>
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
                Come discuss the map, the systems, and the next episode.
              </p>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}