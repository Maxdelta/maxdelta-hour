import Head from "next/head";
import Link from "next/link";

export default function EpisodeSix() {
  return (
    <>
      <Head>
        <title>
          Episode 6: Michigan&apos;s $260 Million Empty Field | The MaxDelta Hour
        </title>
        <meta
          name="description"
          content="Episode 6 of The MaxDelta Hour: Michigan's $260 Million Empty Field. The semiconductor deal that never happened."
        />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/episodes" className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mb-10">
            Back to Episodes
          </Link>

          <header className="text-center mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide">Episode 6</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Michigan&apos;s $260 Million Empty Field
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              The semiconductor deal that never happened.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Listen to Episode 6</h2>

            <audio controls className="w-full">
              <source src="/audio/episode-6-michigans-260-million-empty-field.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <p className="mt-4 text-gray-400 text-sm">
              Intro and outro music: Countdown Documentary by Leberch.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Episode Thesis
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Public risk deserves public accountability.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Michigan&apos;s effort to attract a massive semiconductor manufacturer
                was a legitimate economic development strategy, but when hundreds
                of millions of taxpayer dollars are committed before a final deal
                is secured, transparency and public trust matter.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Core Line
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                If taxpayers fund the bet, taxpayers deserve to see the cards.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Economic development always involves risk. The question is not
                whether Michigan should compete. It is whether the public receives
                enough information to understand the risks being taken on its behalf.
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
                  <span className="text-yellow-400">1.</span> The Promise
                </h2>
                <p className="mt-3">
                  Semiconductors power nearly every part of modern life, from
                  automobiles and medical equipment to military technology and
                  consumer electronics. Michigan saw an opportunity to compete
                  for one of the largest manufacturing investments in state history.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">2.</span> The Bet
                </h2>
                <p className="mt-3">
                  To compete, Michigan committed hundreds of millions of dollars
                  toward assembling land and preparing the Advanced Manufacturing
                  District. Supporters saw shovel-ready land as the price of entry.
                  Critics saw taxpayer risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">3.</span> The Secrecy Problem
                </h2>
                <p className="mt-3">
                  Negotiations involved nondisclosure agreements and limited
                  public information. Supporters viewed confidentiality as necessary
                  to remain competitive. Critics argued that public money should
                  come with public transparency.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">4.</span> The Collapse
                </h2>
                <p className="mt-3">
                  The original semiconductor project ultimately fell through when
                  SanDisk withdrew. The state continues developing and marketing
                  the site, but the original promise of a flagship semiconductor
                  facility did not materialize.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">5.</span> The Bigger Question
                </h2>
                <p className="mt-3">
                  This story is larger than one company or one administration.
                  It raises broader questions about how governments should balance
                  economic development, taxpayer risk, and public accountability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">6.</span> Still Being Written
                </h2>
                <p className="mt-3">
                  The site continues to be marketed, and another manufacturer
                  could eventually build there. Regardless of what happens next,
                  the questions surrounding transparency, public trust, and
                  taxpayer responsibility remain relevant today.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8 mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
              Research Files
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Sources, evidence, and timeline
            </h2>

            <p className="mt-4 text-gray-300 text-lg leading-8">
              This episode names specific public agencies, companies, and public
              decisions. The research files below are provided so listeners can
              review the sources and evidence used while preparing the episode.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/episodes/episode-006-michigans-260-million-empty-field/research/Research_Sources.md" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full">
                Research Sources
              </a>

              <a href="/episodes/episode-006-michigans-260-million-empty-field/research/Evidence_Log.md" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full">
                Evidence Log
              </a>

              <a href="/episodes/episode-006-michigans-260-million-empty-field/research/Timeline.md" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full">
                Timeline
              </a>

              <a href="/episodes/episode-006-michigans-260-million-empty-field/research/Steelman_Review.md" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full">
                Steelman Review
              </a>
            </div>
          </section>

          <section className="rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8 mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
              The Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Compete boldly. Govern transparently. Earn public trust.
            </h2>

            <p className="mt-4 text-gray-300 text-lg leading-8">
              Michigan should compete aggressively for advanced manufacturing,
              technology, and future jobs. But every major public investment
              should be matched by clear communication, accountability, and
              respect for the taxpayers who ultimately make those investments possible.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            <Link href="/episodes" className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">Archive</p>
              <h3 className="mt-3 text-2xl font-bold">All Episodes</h3>
              <p className="mt-3 text-gray-400">Go back through every episode of The MaxDelta Hour.</p>
            </Link>

            <Link href="/videos" className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">Watch</p>
              <h3 className="mt-3 text-2xl font-bold">Video Library</h3>
              <p className="mt-3 text-gray-400">Watch MaxDelta Briefs and video clips from the show.</p>
            </Link>

            <a href="https://discord.gg/6qXaEr7mnB" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-yellow-500 transition">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">Community</p>
              <h3 className="mt-3 text-2xl font-bold">Join Discord</h3>
              <p className="mt-3 text-gray-400">Come discuss the map, the systems, and the next episode.</p>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}