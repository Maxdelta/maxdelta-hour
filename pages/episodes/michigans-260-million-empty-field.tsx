import Head from "next/head";
import Link from "next/link";

export default function EpisodeSix() {
  return (
    <>
      <Head>
        <title>Michigan&apos;s $260 Million Empty Field | The MaxDelta Hour</title>
        <meta
          name="description"
          content="Episode 6 of The MaxDelta Hour: Michigan's $260 Million Empty Field."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/episodes"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10"
          >
            Back to Episodes
          </Link>

          <p className="text-yellow-400 font-bold uppercase tracking-wide">
            Episode 6
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Michigan&apos;s $260 Million Empty Field
          </h1>

          <p className="mt-4 text-2xl text-gray-300">
            The semiconductor deal that never happened.
          </p>

          <p className="mt-8 text-lg text-gray-300 leading-8">
            Michigan spent hundreds of millions preparing a Genesee County
            megasite for a massive semiconductor project. The original anchor
            project fell through, but the site is still being developed and
            marketed. So what level of transparency and accountability should
            come with public risk?
          </p>

          <section className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-2xl font-bold mb-4">Listen</h2>

            <audio controls className="w-full">
              <source src="/audio/episode-6-michigans-260-million-empty-field.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </section>

          <section className="mt-10 rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-2xl font-bold mb-4">Research</h2>

            <p className="text-gray-300 leading-7 mb-6">
              This episode names specific public agencies, companies, and public
              decisions. The research files below are provided so listeners can
              review the sources and evidence used while preparing the episode.
            </p>
            <div className="flex flex-wrap gap-4">
          <a
            href="/episodes/episode-006-michigans-260-million-empty-field/research/Research_Sources.md"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full"
          >
            Research Sources
          </a>

          <a
            href="/episodes/episode-006-michigans-260-million-empty-field/research/Evidence_Log.md"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full"
          >
            Evidence Log
          </a>

          <a
            href="/episodes/episode-006-michigans-260-million-empty-field/research/Timeline.md"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full"
          >
            Timeline
          </a>

          <a
            href="/episodes/episode-006-michigans-260-million-empty-field/research/Steelman_Review.md"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full"
          >
            Steelman Review
          </a>
        </div>

          
          </section>
        </div>
      </main>
    </>
  );
}