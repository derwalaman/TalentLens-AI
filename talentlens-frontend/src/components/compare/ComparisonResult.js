"use client";

import {
    Trophy,
    Medal,
    Sparkles,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import ComparisonTable from "./ComparisonTable";

export default function ComparisonResult({
    result,
}) {

    if (!result) return null;

    const winnerIsA =
        result.winner === "Resume A";

    const winner =
        winnerIsA
            ? result.candidate_a
            : result.candidate_b;

    const renderSummary = (summary) => {

        if (!summary) {
            return (
                <p className="text-gray-400">
                    No summary available
                </p>
            );
        }

        if (typeof summary === "string") {
            return (
                <p className="leading-7 text-gray-300">
                    {summary}
                </p>
            );
        }

        return (

            <div className="space-y-4">

                {Object.entries(summary).map(
                    ([key, value]) => {

                        // Suitable Roles
                        if (
                            Array.isArray(value)
                        ) {
                            return (

                                <div key={key}>

                                    <p
                                        className="
                                        mb-2
                                        text-gray-500
                                        capitalize
                                    "
                                    >
                                        {key.replaceAll(
                                            "_",
                                            " "
                                        )}
                                        :
                                    </p>

                                    <div className="flex flex-wrap gap-2">

                                        {value.map(
                                            (
                                                item,
                                                index
                                            ) => (

                                                <span
                                                    key={index}
                                                    className="
                                                    rounded-full
                                                    border
                                                    border-cyan-500/20
                                                    bg-cyan-500/10
                                                    px-3
                                                    py-1
                                                    text-sm
                                                    text-cyan-300
                                                "
                                                >
                                                    {item}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>

                            );
                        }

                        // Score Breakdown Object
                        if (
                            typeof value === "object" &&
                            value !== null
                        ) {
                            return (

                                <div key={key}>

                                    <p
                                        className="
                                        mb-3
                                        text-gray-500
                                        capitalize
                                    "
                                    >
                                        {key.replaceAll(
                                            "_",
                                            " "
                                        )}
                                        :
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        {Object.entries(
                                            value
                                        ).map(
                                            ([
                                                subKey,
                                                subValue,
                                            ]) => (

                                                <div
                                                    key={subKey}
                                                    className="
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-white/[0.05]
                                                    px-4
                                                    py-2
                                                "
                                                >

                                                    <p
                                                        className="
                                                        text-xs
                                                        uppercase
                                                        tracking-wide
                                                        text-gray-500
                                                    "
                                                    >
                                                        {subKey.replaceAll(
                                                            "_",
                                                            " "
                                                        )}
                                                    </p>

                                                    <p
                                                        className="
                                                        mt-1
                                                        font-semibold
                                                        text-white
                                                    "
                                                    >
                                                        {subValue}
                                                        {
                                                            typeof subValue === "number"
                                                                ? "%"
                                                                : ""
                                                        }
                                                    </p>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            );
                        }

                        // Normal Fields
                        return (

                            <div
                                key={key}
                                className="
                                flex
                                flex-wrap
                                gap-2
                            "
                            >

                                <span
                                    className="
                                    text-gray-500
                                    capitalize
                                "
                                >
                                    {key.replaceAll(
                                        "_",
                                        " "
                                    )}
                                    :
                                </span>

                                <span className="text-white">
                                    {value}
                                </span>

                            </div>

                        );
                    }
                )}

            </div>

        );
    };

    return (

        <section className="mt-20">

            {/* Winner Banner */}

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-yellow-500/20
                    bg-gradient-to-br
                    from-yellow-500/10
                    via-orange-500/5
                    to-transparent
                    p-10
                    backdrop-blur-xl
                "
            >

                <div
                    className="
                        absolute
                        -right-20
                        -top-20
                        h-72
                        w-72
                        rounded-full
                        bg-yellow-500/10
                        blur-3xl
                    "
                />

                <div className="relative">

                    <div
                        className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-3xl
                            bg-yellow-500/20
                        "
                    >
                        <Trophy
                            className="
                                h-10
                                w-10
                                text-yellow-400
                            "
                        />
                    </div>

                    <div className="mt-6 text-center">

                        <span
                            className="
                                rounded-full
                                border
                                border-yellow-500/20
                                bg-yellow-500/10
                                px-4
                                py-2
                                text-sm
                                text-yellow-300
                            "
                        >
                            Best Candidate
                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                font-black
                                md:text-6xl
                            "
                        >
                            {result.winner}
                        </h2>

                        <p
                            className="
                                mt-4
                                text-xl
                                text-gray-300
                            "
                        >
                            {result.recommendation}
                        </p>

                    </div>

                    <div
                        className="
                            mt-8
                            flex
                            flex-wrap
                            justify-center
                            gap-3
                        "
                    >

                        {
                            result.advantages?.map(
                                (item, index) => (
                                    <span
                                        key={index}
                                        className="
                                            rounded-full
                                            bg-green-500/20
                                            px-4
                                            py-2
                                            text-green-300
                                        "
                                    >
                                        ✓ {item}
                                    </span>
                                )
                            )
                        }

                    </div>

                </div>

            </div>

            {/* Candidate Cards */}

            <div
                className="
                    mt-10
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                {/* Candidate A */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        p-8
                        backdrop-blur-xl
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <h3
                            className="
                                text-3xl
                                font-black
                            "
                        >
                            Resume A
                        </h3>

                        {
                            winnerIsA && (
                                <Medal
                                    className="
                                        h-8
                                        w-8
                                        text-yellow-400
                                    "
                                />
                            )
                        }

                    </div>

                    <div
                        className="
                            grid
                            grid-cols-3
                            gap-3
                        "
                    >

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Final
                            </p>

                            <p className="mt-2 text-3xl font-bold text-emerald-400">
                                {result.candidate_a.final_score}%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Semantic
                            </p>

                            <p className="mt-2 text-3xl font-bold text-cyan-400">
                                {result.candidate_a.semantic_score}%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Skills
                            </p>

                            <p className="mt-2 text-3xl font-bold text-violet-400">
                                {result.candidate_a.skill_score}%
                            </p>
                        </div>

                    </div>

                    {
                        result.candidate_a.candidate_summary && (
                            <div className="mt-6 rounded-2xl bg-black/20 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-cyan-400" />
                                    <span className="font-semibold">
                                        AI Summary
                                    </span>
                                </div>

                                <p className="text-gray-300">
                                    {
                                        typeof result.candidate_a.candidate_summary === "string"
                                            ? result.candidate_a.candidate_summary
                                            : renderSummary(
                                                result.candidate_a.candidate_summary
                                            )
                                    }
                                </p>
                            </div>
                        )
                    }

                    <div className="mt-6">

                        <h4 className="mb-4 text-xl font-bold text-green-400">
                            Strengths
                        </h4>

                        <div
                            className="
        max-h-[420px]
        overflow-y-auto
        space-y-3
        pr-2
    "
                        >

                            {
                                result.candidate_a.matched_skills?.map(
                                    (skill, index) => (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                rounded-xl
                                                bg-black/20
                                                p-3
                                            "
                                        >
                                            <CheckCircle2
                                                className="
                                                    h-4
                                                    w-4
                                                    text-green-400
                                                "
                                            />
                                            {skill}
                                        </div>
                                    )
                                )
                            }

                        </div>

                    </div>

                </div>

                {/* Candidate B */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        p-8
                        backdrop-blur-xl
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <h3
                            className="
                                text-3xl
                                font-black
                            "
                        >
                            Resume B
                        </h3>

                        {
                            !winnerIsA && (
                                <Medal
                                    className="
                                        h-8
                                        w-8
                                        text-yellow-400
                                    "
                                />
                            )
                        }

                    </div>

                    <div
                        className="
                            grid
                            grid-cols-3
                            gap-3
                        "
                    >

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Final
                            </p>

                            <p className="mt-2 text-3xl font-bold text-cyan-400">
                                {result.candidate_b.final_score}%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Semantic
                            </p>

                            <p className="mt-2 text-3xl font-bold text-violet-400">
                                {result.candidate_b.semantic_score}%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-black/20 p-4 text-center">
                            <p className="text-xs text-gray-400">
                                Skills
                            </p>

                            <p className="mt-2 text-3xl font-bold text-emerald-400">
                                {result.candidate_b.skill_score}%
                            </p>
                        </div>

                    </div>

                    {
                        result.candidate_b.candidate_summary && (
                            <div className="mt-6 rounded-2xl bg-black/20 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-cyan-400" />
                                    <span className="font-semibold">
                                        AI Summary
                                    </span>
                                </div>

                                <p className="text-gray-300">
                                    {
                                        typeof result.candidate_b.candidate_summary === "string"
                                            ? result.candidate_b.candidate_summary
                                            : renderSummary(
                                                result.candidate_b.candidate_summary
                                            )
                                    }
                                </p>
                            </div>
                        )
                    }

                    <div className="mt-6">

                        <h4 className="mb-4 text-xl font-bold text-red-400">
                            Skill Gaps
                        </h4>

                        <div
                            className="
        max-h-[420px]
        overflow-y-auto
        space-y-3
        pr-2
    "
                        >

                            {
                                result.candidate_b.missing_skills?.map(
                                    (skill, index) => (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                rounded-xl
                                                bg-black/20
                                                p-3
                                            "
                                        >
                                            <XCircle
                                                className="
                                                    h-4
                                                    w-4
                                                    text-red-400
                                                "
                                            />
                                            {skill}
                                        </div>
                                    )
                                )
                            }

                        </div>

                    </div>

                </div>

            </div>

            <ComparisonTable
                result={result}
            />

        </section>

    );

}