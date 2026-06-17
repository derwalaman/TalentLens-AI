"use client";

import {
    CheckCircle2,
    XCircle,
    Trophy,
} from "lucide-react";

export default function ComparisonTable({
    result,
}) {

    if (!result) return null;

    const candidateA =
        result.candidate_a;

    const candidateB =
        result.candidate_b;

    const allSkills = [
        ...new Set([
            ...(candidateA.matched_skills || []),
            ...(candidateA.missing_skills || []),
            ...(candidateB.matched_skills || []),
            ...(candidateB.missing_skills || []),
        ]),
    ];

    const winner =
        result.winner === "Resume A"
            ? "A"
            : "B";

    return (

        <section className="mt-10">

            {/* Header */}

            <div className="mb-8 text-center">

                <span
                    className="
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/10
                        px-4
                        py-2
                        text-sm
                        text-violet-300
                    "
                >
                    ATS Comparison Engine
                </span>

                <h2
                    className="
                        mt-5
                        text-4xl
                        font-black
                        md:text-5xl
                    "
                >
                    Head-to-Head Analysis
                </h2>

                <p className="mt-4 text-gray-400">
                    Side-by-side candidate evaluation
                    against the same job description.
                </p>

            </div>

            {/* Metrics Grid */}

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-3
                "
            >

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-6
                        backdrop-blur-xl
                    "
                >

                    <p className="text-sm text-gray-500">
                        Final Score
                    </p>

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div>

                            <p className="text-xs text-gray-500">
                                Resume A
                            </p>

                            <p className="text-4xl font-black text-emerald-400">
                                {candidateA.final_score}%
                            </p>

                        </div>

                        <div>

                            <p className="text-xs text-gray-500">
                                Resume B
                            </p>

                            <p className="text-4xl font-black text-cyan-400">
                                {candidateB.final_score}%
                            </p>

                        </div>

                    </div>

                </div>

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-6
                        backdrop-blur-xl
                    "
                >

                    <p className="text-sm text-gray-500">
                        Semantic Score
                    </p>

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div>

                            <p className="text-xs text-gray-500">
                                Resume A
                            </p>

                            <p className="text-4xl font-black text-violet-400">
                                {candidateA.semantic_score}%
                            </p>

                        </div>

                        <div>

                            <p className="text-xs text-gray-500">
                                Resume B
                            </p>

                            <p className="text-4xl font-black text-fuchsia-400">
                                {candidateB.semantic_score}%
                            </p>

                        </div>

                    </div>

                </div>

                <div
                    className="
        rounded-[28px]
        border
        border-yellow-500/20
        bg-yellow-500/10
        p-6
        flex
        items-center
        gap-5
    "
                >

                    <div
                        className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-yellow-500/20
        "
                    >
                        <Trophy
                            className="
                h-8
                w-8
                text-yellow-400
            "
                        />
                    </div>

                    <div>

                        <p className="text-gray-400">
                            Winner
                        </p>

                        <h3
                            className="
                text-4xl
                font-black
                text-yellow-300
            "
                        >
                            {result.winner}
                        </h3>

                    </div>

                </div>

            </div>

            {/* Comparison Table */}

            <div
                className="
                    mt-8
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                "
            >

                <div
                    className="
                        border-b
                        border-white/10
                        p-6
                    "
                >

                    <h3
                        className="
                            text-2xl
                            font-bold
                        "
                    >
                        Recruiter Metrics
                    </h3>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr
                                className="
                                    border-b
                                    border-white/10
                                    text-gray-400
                                "
                            >

                                <th className="p-5 text-left">
                                    Metric
                                </th>

                                <th className="p-5 text-center">
                                    Resume A
                                </th>

                                <th className="p-5 text-center">
                                    Resume B
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {[
                                [
                                    "Final Score",
                                    `${candidateA.final_score}%`,
                                    `${candidateB.final_score}%`,
                                ],
                                [
                                    "Semantic Score",
                                    `${candidateA.semantic_score}%`,
                                    `${candidateB.semantic_score}%`,
                                ],
                                [
                                    "Skill Score",
                                    `${candidateA.skill_score}%`,
                                    `${candidateB.skill_score}%`,
                                ],
                                [
                                    "Matched Skills",
                                    candidateA.matched_skills?.length || 0,
                                    candidateB.matched_skills?.length || 0,
                                ],
                                [
                                    "Missing Skills",
                                    candidateA.missing_skills?.length || 0,
                                    candidateB.missing_skills?.length || 0,
                                ],
                            ].map(
                                (
                                    row,
                                    index
                                ) => (

                                    <tr
                                        key={index}
                                        className="
                                            border-b
                                            border-white/5
                                        "
                                    >

                                        <td className="p-5 font-medium">
                                            {row[0]}
                                        </td>

                                        <td className="p-5 text-center">
                                            {row[1]}
                                        </td>

                                        <td className="p-5 text-center">
                                            {row[2]}
                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Skill Matrix */}

            <div
                className="
        mt-10
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
    "
            >

                <div className="mb-8">

                    <h3 className="text-3xl font-black">
                        Skill Battle
                    </h3>

                    <p className="mt-2 text-gray-400">
                        Head-to-head comparison of required skills.
                    </p>

                </div>

                {/* Candidate Labels */}

                <div
                    className="
            mb-6
            grid
            grid-cols-[120px_1fr_120px]
            items-center
        "
                >

                    <div className="text-center">

                        <div
                            className="
                    inline-flex
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-emerald-400
                "
                        >
                            Resume A
                        </div>

                    </div>

                    <div />

                    <div className="text-center">

                        <div
                            className="
                    inline-flex
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-cyan-400
                "
                        >
                            Resume B
                        </div>

                    </div>

                </div>

                {/* Scrollable Skills */}

                <div
                    className="
            max-h-[600px]
            space-y-3
            overflow-y-auto
            pr-2
        "
                >

                    {allSkills.map((skill) => {

                        const aMatch =
                            candidateA.matched_skills?.includes(skill);

                        const bMatch =
                            candidateB.matched_skills?.includes(skill);

                        return (

                            <div
                                key={skill}
                                className="
                        grid
                        grid-cols-[120px_1fr_120px]
                        items-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-4
                        transition-all
                        duration-300
                        hover:bg-white/[0.06]
                    "
                            >

                                {/* A */}

                                <div className="flex justify-center">

                                    {aMatch ? (

                                        <div
                                            className="
                                    h-10
                                    w-10
                                    rounded-full
                                    border
                                    border-emerald-500/20
                                    bg-emerald-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                                        >
                                            <CheckCircle2
                                                className="
                                        h-5
                                        w-5
                                        text-emerald-400
                                    "
                                            />
                                        </div>

                                    ) : (

                                        <div
                                            className="
                                    h-10
                                    w-10
                                    rounded-full
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                                        >
                                            <XCircle
                                                className="
                                        h-5
                                        w-5
                                        text-red-400
                                    "
                                            />
                                        </div>

                                    )}

                                </div>

                                {/* Skill */}

                                <div className="px-4">

                                    <div className="text-center">

                                        <p
                                            className="
                                    font-medium
                                    text-white
                                "
                                        >
                                            {skill}
                                        </p>

                                    </div>

                                    {/* Battle Bar */}

                                    <div
                                        className="
                                mt-3
                                h-2
                                overflow-hidden
                                rounded-full
                                bg-white/5
                            "
                                    >

                                        <div
                                            className={`
                                    h-full
                                    ${aMatch && bMatch
                                                    ? "w-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                                                    : aMatch
                                                        ? "w-1/2 bg-emerald-500"
                                                        : bMatch
                                                            ? "w-1/2 ml-auto bg-cyan-500"
                                                            : "w-0"
                                                }
                                `}
                                        />

                                    </div>

                                </div>

                                {/* B */}

                                <div className="flex justify-center">

                                    {bMatch ? (

                                        <div
                                            className="
                                    h-10
                                    w-10
                                    rounded-full
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                                        >
                                            <CheckCircle2
                                                className="
                                        h-5
                                        w-5
                                        text-cyan-400
                                    "
                                            />
                                        </div>

                                    ) : (

                                        <div
                                            className="
                                    h-10
                                    w-10
                                    rounded-full
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                                        >
                                            <XCircle
                                                className="
                                        h-5
                                        w-5
                                        text-red-400
                                    "
                                            />
                                        </div>

                                    )}

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}