"use client";

import {
    Search,
    Trophy,
    Medal,
    Award,
} from "lucide-react";

import {
    useMemo,
    useState,
} from "react";

export default function CandidateLeaderboard({
    candidates,
}) {

    const [search, setSearch] =
        useState("");

    const filteredCandidates =
        useMemo(() => {

            return candidates.filter(
                (candidate) =>
                    candidate.name
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );

        }, [search, candidates]);

    if (!candidates?.length)
        return null;

    const topThree =
        filteredCandidates.slice(
            0,
            3
        );

    const remaining =
        filteredCandidates.slice(
            3
        );

    const getBadge = (
        score
    ) => {

        if (score >= 85)
            return {
                text:
                    "Strongly Recommended",
                color:
                    "bg-emerald-500/20 text-emerald-400",
            };

        if (score >= 70)
            return {
                text:
                    "Recommended",
                color:
                    "bg-cyan-500/20 text-cyan-400",
            };

        if (score >= 50)
            return {
                text:
                    "Moderate Fit",
                color:
                    "bg-yellow-500/20 text-yellow-400",
            };

        return {
            text:
                "Low Fit",
            color:
                "bg-red-500/20 text-red-400",
        };

    };

    return (

        <section className="mt-16">

            {/* Header */}

            <div className="mb-10 text-center">

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
                    AI Ranking Results
                </span>

                <h2
                    className="
                        mt-5
                        text-4xl
                        font-black
                        md:text-5xl
                    "
                >
                    Candidate Leaderboard
                </h2>

            </div>

            {/* Search */}

            <div
                className="
                    relative
                    mx-auto
                    mb-10
                    max-w-md
                "
            >

                <Search
                    size={18}
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                    "
                />

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search candidate..."
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        py-3
                        pl-12
                        pr-4
                        outline-none
                    "
                />

            </div>

            {/* Top 3 */}

            <div
                className="
                    mb-10
                    grid
                    gap-6
                    lg:grid-cols-3
                "
            >

                {topThree.map(
                    (
                        candidate,
                        index
                    ) => {

                        const icons = [
                            Trophy,
                            Medal,
                            Award,
                        ];

                        const colors = [
                            "text-yellow-400",
                            "text-gray-300",
                            "text-orange-400",
                        ];

                        const Icon =
                            icons[index];

                        return (

                            <div
                                key={
                                    candidate.name
                                }
                                className="
                                    rounded-[32px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-8
                                    backdrop-blur-xl
                                "
                            >

                                <Icon
                                    className={`
                                        h-12
                                        w-12
                                        ${colors[index]}
                                    `}
                                />

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    Rank #{index + 1}
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                    "
                                >
                                    {
                                        candidate.name
                                    }
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-6xl
                                        font-black
                                        text-cyan-400
                                    "
                                >
                                    {
                                        candidate.final_score
                                    }%
                                </p>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >

                                    {candidate
                                        .matched_skills
                                        ?.slice(
                                            0,
                                            5
                                        )
                                        .map(
                                            (
                                                skill,
                                                i
                                            ) => (
                                                <span
                                                    key={i}
                                                    className="
                                                        rounded-full
                                                        bg-emerald-500/10
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        text-emerald-300
                                                    "
                                                >
                                                    {skill}
                                                </span>
                                            )
                                        )}

                                </div>

                            </div>

                        );

                    }
                )}

            </div>

            {/* Remaining Candidates */}

            <div className="space-y-5">

                {filteredCandidates.map(
                    (
                        candidate,
                        index
                    ) => {

                        const badge =
                            getBadge(
                                candidate.final_score
                            );

                        return (

                            <div
                                key={
                                    candidate.name
                                }
                                className="
                                    rounded-[32px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                    backdrop-blur-xl
                                "
                            >

                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-6
                                        lg:flex-row
                                        lg:items-center
                                        lg:justify-between
                                    "
                                >

                                    <div>

                                        <div
                                            className="
                                                mb-3
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <span
                                                className="
                                                    rounded-full
                                                    bg-violet-500/20
                                                    px-4
                                                    py-1
                                                    text-sm
                                                "
                                            >
                                                #
                                                {index + 1}
                                            </span>

                                            <span
                                                className={`
                                                    rounded-full
                                                    px-4
                                                    py-1
                                                    text-sm
                                                    ${badge.color}
                                                `}
                                            >
                                                {
                                                    badge.text
                                                }
                                            </span>

                                        </div>

                                        <h3
                                            className="
                                                text-2xl
                                                font-bold
                                            "
                                        >
                                            {
                                                candidate.name
                                            }
                                        </h3>

                                        {candidate.job_title && (

                                            <p
                                                className="
                                                    mt-1
                                                    text-gray-400
                                                "
                                            >
                                                {
                                                    candidate.job_title
                                                }
                                            </p>

                                        )}

                                    </div>

                                    <div
                                        className="
                                            text-right
                                        "
                                    >

                                        <p
                                            className="
                                                text-5xl
                                                font-black
                                                text-cyan-400
                                            "
                                        >
                                            {
                                                candidate.final_score
                                            }
                                            %
                                        </p>

                                    </div>

                                </div>

                                {/* Progress */}

                                <div className="mt-6">

                                    <div
                                        className="
                                            h-3
                                            overflow-hidden
                                            rounded-full
                                            bg-white/10
                                        "
                                    >

                                        <div
                                            className="
                                                h-full
                                                rounded-full
                                                bg-gradient-to-r
                                                from-violet-500
                                                via-cyan-500
                                                to-emerald-400
                                            "
                                            style={{
                                                width: `${candidate.final_score}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                                {/* Stats */}

                                <div
                                    className="
                                        mt-6
                                        grid
                                        gap-4
                                        md:grid-cols-3
                                    "
                                >

                                    <div className="rounded-xl bg-white/[0.04] p-4">
                                        <p className="text-gray-500 text-sm">
                                            Semantic
                                        </p>
                                        <p className="text-xl font-bold text-cyan-400">
                                            {
                                                candidate.semantic_score
                                            }%
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/[0.04] p-4">
                                        <p className="text-gray-500 text-sm">
                                            Skills
                                        </p>
                                        <p className="text-xl font-bold text-violet-400">
                                            {
                                                candidate.skill_score
                                            }%
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/[0.04] p-4">
                                        <p className="text-gray-500 text-sm">
                                            Matched
                                        </p>
                                        <p className="text-xl font-bold text-emerald-400">
                                            {
                                                candidate.matched_skills?.length
                                            }
                                        </p>
                                    </div>

                                </div>

                            </div>

                        );

                    }
                )}

            </div>

        </section>

    );

}