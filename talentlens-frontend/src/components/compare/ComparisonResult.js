"use client";

import ComparisonTable from "./ComparisonTable";

export default function ComparisonResult({
    result,
}) {
    if (!result) return null;

    return (
        <div className="mt-16 space-y-8">

            {/* Winner Card */}

            <div
                className="
                rounded-3xl
                border border-yellow-500/20
                bg-yellow-500/10
                p-10
                text-center
                "
            >
                <div className="text-6xl">
                    🏆
                </div>

                <h2 className="mt-4 text-4xl font-bold">
                    Best Candidate
                </h2>

                <p className="mt-4 text-5xl font-bold text-yellow-300">
                    {result.winner}
                </p>

                <p className="mt-4 text-lg text-gray-300">
                    {result.recommendation}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">

                    {result.advantages?.map(
                        (item, index) => (
                            <span
                                key={index}
                                className="
                                rounded-full
                                bg-green-500/20
                                px-4 py-2
                                text-green-300
                                "
                            >
                                ✓ {item}
                            </span>
                        )
                    )}

                </div>

            </div>

            {/* Candidate Cards */}

            <div className="grid gap-6 lg:grid-cols-2">

                {/* Candidate A */}

                <div
                    className="
                    rounded-3xl
                    border border-green-500/20
                    bg-green-500/10
                    p-8
                    "
                >
                    <h3 className="text-3xl font-bold mb-5">
                        Resume A
                    </h3>

                    <p>
                        Final Score:
                        <span className="ml-2 text-green-400 font-bold">
                            {result.candidate_a.final_score}%
                        </span>
                    </p>

                    <p className="mt-2">
                        Semantic Score:
                        <span className="ml-2">
                            {result.candidate_a.semantic_score}%
                        </span>
                    </p>

                    <p className="mt-2">
                        Skill Score:
                        <span className="ml-2">
                            {result.candidate_a.skill_score}%
                        </span>
                    </p>

                    <div className="mt-6">

                        <h4 className="font-bold text-xl mb-3">
                            Strengths
                        </h4>

                        {result.candidate_a.matched_skills?.map(
                            (skill) => (
                                <div
                                    key={skill}
                                    className="mb-2 text-green-300"
                                >
                                    ✓ {skill}
                                </div>
                            )
                        )}

                    </div>

                    <div className="mt-6">

                        <h4 className="font-bold text-xl mb-3">
                            Weaknesses
                        </h4>

                        {result.candidate_a.missing_skills?.length > 0 ? (
                            result.candidate_a.missing_skills.map(
                                (skill) => (
                                    <div
                                        key={skill}
                                        className="mb-2 text-red-300"
                                    >
                                        ✗ {skill}
                                    </div>
                                )
                            )
                        ) : (
                            <p className="text-green-300">
                                No major weaknesses
                            </p>
                        )}

                    </div>

                </div>

                {/* Candidate B */}

                <div
                    className="
                    rounded-3xl
                    border border-blue-500/20
                    bg-blue-500/10
                    p-8
                    "
                >
                    <h3 className="text-3xl font-bold mb-5">
                        Resume B
                    </h3>

                    <p>
                        Final Score:
                        <span className="ml-2 text-blue-400 font-bold">
                            {result.candidate_b.final_score}%
                        </span>
                    </p>

                    <p className="mt-2">
                        Semantic Score:
                        <span className="ml-2">
                            {result.candidate_b.semantic_score}%
                        </span>
                    </p>

                    <p className="mt-2">
                        Skill Score:
                        <span className="ml-2">
                            {result.candidate_b.skill_score}%
                        </span>
                    </p>

                    <div className="mt-6">

                        <h4 className="font-bold text-xl mb-3">
                            Strengths
                        </h4>

                        {result.candidate_b.matched_skills?.map(
                            (skill) => (
                                <div
                                    key={skill}
                                    className="mb-2 text-green-300"
                                >
                                    ✓ {skill}
                                </div>
                            )
                        )}

                    </div>

                    <div className="mt-6">

                        <h4 className="font-bold text-xl mb-3">
                            Weaknesses
                        </h4>

                        {result.candidate_b.missing_skills?.length > 0 ? (
                            result.candidate_b.missing_skills.map(
                                (skill) => (
                                    <div
                                        key={skill}
                                        className="mb-2 text-red-300"
                                    >
                                        ✗ {skill}
                                    </div>
                                )
                            )
                        ) : (
                            <p className="text-green-300">
                                No major weaknesses
                            </p>
                        )}

                    </div>

                </div>

            </div>

            <ComparisonTable
                result={result}
            />

        </div>
    );
}