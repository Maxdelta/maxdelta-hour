import Head from "next/head";
import Link from "next/link";

export default function AdjustFireMichiganHousing() {
  return (
    <>
      <Head>
        <title>
          Episode 5: Adjust Fire — Michigan Housing | The MaxDelta Hour
        </title>
        <meta
          name="description"
          content="Episode 5 of The MaxDelta Hour: Adjust Fire — Michigan Housing. Why Michigan's housing crisis is not as simple as just building more homes."
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
              Episode 5
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Adjust Fire — Michigan Housing
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
              Michigan's housing crisis is real, but the answer is not as simple
              as building everywhere, faster, and calling it progress.
            </p>
          </header>

          <section className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Listen to Episode 5</h2>

            <audio controls className="w-full">
              <source
                src="/audio/episode-5-adjust-fire-michigan-housing.mp3"
                type="audio/mpeg"
              />
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
                Housing is a system, not a slogan.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Michigan does have a housing problem. But before politicians
                hand more power to developers, override local control, or push a
                one-size-fits-all solution, we need to ask what problem we are
                actually trying to solve.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Core Line
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                More housing is not the same thing as better housing policy.
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                If the state builds the wrong homes in the wrong places for the
                wrong reasons, Michigan can spend billions and still leave
                working families, aging towns, and struggling communities behind.
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
                  <span className="text-yellow-400">1.</span> The Housing
                  Shortage Narrative
                </h2>
                <p className="mt-3">
                  Michigan leaders keep pointing to a housing shortage as if the
                  only answer is to build more units. But housing is not just a
                  unit count. It is location, price, condition, infrastructure,
                  wages, schools, taxes, insurance, and whether people can
                  actually afford to live there.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">2.</span> The Vacancy
                  Mismatch
                </h2>
                <p className="mt-3">
                  Michigan has vacant homes, empty buildings, underused
                  properties, and struggling neighborhoods. The problem is that
                  the homes we have are often not where people need them, not in
                  the condition people can use, or not priced where working
                  families can reach them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">3.</span> Why One Size Fits
                  All Does Not Work
                </h2>
                <p className="mt-3">
                  Detroit, Novi, Flint, Grand Rapids, Traverse City, rural
                  townships, and old factory towns are not facing the same
                  housing problem. A statewide solution that ignores local
                  conditions risks solving one city's problem by creating another
                  community's crisis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">4.</span> Follow the Money
                </h2>
                <p className="mt-3">
                  Whenever politicians say the answer is faster building, the
                  next question should be who profits. Developers, landowners,
                  consultants, investors, and politically connected groups may
                  all benefit from new construction, even when existing
                  communities still need repair.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">5.</span> Fix What We Have
                  First
                </h2>
                <p className="mt-3">
                  Before Michigan treats every field and every suburb like the
                  next construction site, the state should get serious about
                  rehabilitation, vacancy recovery, code enforcement, utility
                  upgrades, tax foreclosure reform, and helping people stay in
                  homes that already exist.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-yellow-400">6.</span> The Real Question
                </h2>
                <p className="mt-3">
                  The real question is not whether Michigan needs housing. It
                  does. The question is who the housing is for, where it is being
                  built, who pays for the growth, and whether the policy serves
                  residents or simply creates another pipeline for profit.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-red-900/60 bg-red-950/20 p-6 md:p-8 mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
              The Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Build smarter. Repair first. Stop confusing construction with
              strategy.
            </h2>

            <p className="mt-4 text-gray-300 text-lg leading-8">
              Michigan needs a housing plan that respects local communities,
              rebuilds what is broken, targets affordability honestly, and does
              not hand the entire map to people who profit from pouring concrete.
              More supply can be part of the answer, but it cannot be the whole
              answer.
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