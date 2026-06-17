export default function RankingHero() {

    return (

        <section className="mb-20 text-center">

            <div
                className="
                    inline-flex
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-5
                    py-2
                    text-sm
                    text-cyan-300
                "
            >
                AI Recruitment Intelligence
            </div>

            <h1
                className="
                    mt-6
                    text-5xl
                    font-black
                    md:text-7xl
                "
            >
                Candidate Ranking
                <span
                    className="
                        block
                        bg-gradient-to-r
                        from-cyan-400
                        via-violet-400
                        to-pink-400
                        bg-clip-text
                        text-transparent
                    "
                >
                    Command Center
                </span>
            </h1>

            <p
                className="
                    mx-auto
                    mt-6
                    max-w-4xl
                    text-lg
                    text-gray-400
                "
            >
                Upload multiple resumes and let TalentLens
                automatically rank candidates using
                semantic similarity, skill coverage,
                AI insights and recruiter-focused scoring.
            </p>

        </section>

    );
}