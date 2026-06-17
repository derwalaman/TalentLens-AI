"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function CandidateRankingTable({
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

        }, [
            search,
            candidates,
        ]);

    const getBadge = (
        index
    ) => {

        if (index === 0)
            return "🥇 Top Candidate";

        if (index === 1)
            return "🥈 Strong Candidate";

        if (index === 2)
            return "🥉 Good Candidate";

        return "📄 Candidate";
    };

    const getRecommendation = (
        score
    ) => {

        if (score >= 85)
            return {
                text:
                    "Strongly Recommended",
                color:
                    "bg-green-500/20 text-green-400",
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

    const renderSummary = (
        summary
    ) => {

        if (!summary)
            return (
                <p className="text-gray-400">
                    No summary available
                </p>
            );

        if (
            typeof summary ===
            "string"
        ) {
            return (
                <p className="text-gray-300">
                    {summary}
                </p>
            );
        }

        return (

            <div className="grid gap-3 md:grid-cols-2">

                {Object.entries(
                    summary
                ).map(
                    (
                        [
                            key,
                            value,
                        ]
                    ) => {

                        if (
                            value === null ||
                            value === undefined
                        )
                            return null;

                        return (

                            <div
                                key={key}
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-black/20
                                    p-3
                                "
                            >

                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    {key.replaceAll(
                                        "_",
                                        " "
                                    )}
                                </p>

                                <div className="mt-2">

                                    {Array.isArray(
                                        value
                                    ) ? (

                                        <div className="flex flex-wrap gap-2">

                                            {value.map(
                                                (
                                                    item,
                                                    index
                                                ) => (

                                                    <span
                                                        key={
                                                            index
                                                        }
                                                        className="
                                                            rounded-full
                                                            bg-violet-500/10
                                                            px-3
                                                            py-1
                                                            text-xs
                                                        "
                                                    >
                                                        {
                                                            item
                                                        }
                                                    </span>

                                                )
                                            )}

                                        </div>

                                    ) : typeof value ===
                                        "object" ? (

                                        <div className="space-y-1 text-sm">

                                            {Object.entries(
                                                value
                                            ).map(
                                                (
                                                    [
                                                        k,
                                                        v,
                                                    ]
                                                ) => (

                                                    <div
                                                        key={
                                                            k
                                                        }
                                                    >
                                                        <span className="text-gray-500">
                                                            {k.replaceAll(
                                                                "_",
                                                                " "
                                                            )}
                                                            :
                                                        </span>{" "}
                                                        {
                                                            v
                                                        }
                                                    </div>

                                                )
                                            )}

                                        </div>

                                    ) : (

                                        <p className="text-white">
                                            {
                                                value
                                            }
                                        </p>

                                    )}

                                </div>

                            </div>

                        );

                    }
                )}

            </div>

        );
    };

    if (
        !candidates?.length
    )
        return null;

    return (

        <section className="mt-16">

            <div
                className="
                    rounded-[36px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                "
            >

                {/* Header */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-4
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >

                    <div>

                        <h2
                            className="
                                text-4xl
                                font-black
                            "
                        >
                            Candidate Ranking
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Ranked by ATS score,
                            semantic relevance
                            and skill matching.
                        </p>

                    </div>

                    <div className="relative w-full md:w-80">

                        <Search
                            size={18}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search candidate..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target
                                        .value
                                )
                            }
                            className="
                                w-full
                                rounded-xl
                                border
                                border-white/10
                                bg-black/40
                                py-3
                                pl-11
                                pr-4
                                outline-none
                                focus:border-cyan-500
                            "
                        />

                    </div>

                </div>

                <div className="space-y-8">

                    {filteredCandidates.map(
                        (
                            candidate,
                            index
                        ) => {

                            const score =
                                candidate.final_score;

                            const rec =
                                getRecommendation(
                                    score
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
                                        bg-black/30
                                        p-6
                                    "
                                >

                                    {/* Header */}

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-4
                                            lg:flex-row
                                            lg:items-center
                                            lg:justify-between
                                        "
                                    >

                                        <div>

                                            <div className="mb-3 flex flex-wrap gap-3">

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
                                                    {index +
                                                        1}
                                                </span>

                                                <span
                                                    className="
                                                        rounded-full
                                                        bg-white/10
                                                        px-4
                                                        py-1
                                                        text-sm
                                                    "
                                                >
                                                    {getBadge(
                                                        index
                                                    )}
                                                </span>

                                            </div>

                                            <h3
                                                className="
                                                    text-3xl
                                                    font-bold
                                                "
                                            >
                                                {
                                                    candidate.name
                                                }
                                            </h3>

                                            {candidate.job_title && (
                                                <p className="mt-2 text-gray-400">
                                                    {
                                                        candidate.job_title
                                                    }
                                                </p>
                                            )}

                                        </div>

                                        <div
                                            className={`
                                                rounded-xl
                                                px-4
                                                py-2
                                                font-semibold
                                                ${rec.color}
                                            `}
                                        >
                                            {
                                                rec.text
                                            }
                                        </div>

                                    </div>

                                    {/* Scores */}

                                    <div className="mt-6 grid gap-4 md:grid-cols-3">

                                        <div className="rounded-2xl bg-white/[0.04] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Final Score
                                            </p>

                                            <p className="mt-2 text-4xl font-black text-cyan-400">
                                                {score}%
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-white/[0.04] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Semantic
                                            </p>

                                            <p className="mt-2 text-3xl font-bold">
                                                {
                                                    candidate.semantic_score
                                                }
                                                %
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-white/[0.04] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Skill Score
                                            </p>

                                            <p className="mt-2 text-3xl font-bold">
                                                {
                                                    candidate.skill_score
                                                }
                                                %
                                            </p>
                                        </div>

                                    </div>

                                    {/* AI Summary */}

                                    <div
                                        className="
                                            mt-6
                                            rounded-3xl
                                            border
                                            border-cyan-500/20
                                            bg-cyan-500/10
                                            p-5
                                        "
                                    >

                                        <h4
                                            className="
                                                mb-4
                                                text-xl
                                                font-bold
                                                text-cyan-400
                                            "
                                        >
                                            AI Candidate Summary
                                        </h4>

                                        {renderSummary(
                                            candidate.candidate_summary
                                        )}

                                    </div>

                                </div>

                            );

                        }
                    )}

                </div>

            </div>

        </section>

    );

}