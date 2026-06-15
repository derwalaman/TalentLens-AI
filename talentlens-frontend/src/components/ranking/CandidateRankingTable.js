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
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }, [search, candidates]);

    const getBadge = (index) => {
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
                text: "Strongly Recommended",
                color:
                    "bg-green-500/20 text-green-400",
            };

        if (score >= 70)
            return {
                text: "Recommended",
                color:
                    "bg-cyan-500/20 text-cyan-400",
            };

        if (score >= 50)
            return {
                text: "Moderate Fit",
                color:
                    "bg-yellow-500/20 text-yellow-400",
            };

        return {
            text: "Low Fit",
            color:
                "bg-red-500/20 text-red-400",
        };
    };

    if (!candidates?.length)
        return null;

    return (
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <h2 className="text-4xl font-bold">
                    Candidate Ranking
                </h2>

                <div className="relative w-full md:w-80">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search candidate..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-500"
                    />

                </div>

            </div>

            <div className="space-y-6">

                {filteredCandidates.map(
                    (
                        candidate,
                        index
                    ) => {
                        const rec =
                            getRecommendation(
                                candidate.score
                            );

                        return (
                            <div
                                key={
                                    candidate.name
                                }
                                className="rounded-3xl border border-white/10 bg-black/30 p-6"
                            >
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                    <div>

                                        <div className="mb-3 flex items-center gap-3">

                                            <span className="rounded-full bg-violet-500/20 px-4 py-1 text-sm font-semibold text-violet-300">
                                                #
                                                {index +
                                                    1}
                                            </span>

                                            <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
                                                {getBadge(
                                                    index
                                                )}
                                            </span>

                                        </div>

                                        <h3 className="text-2xl font-semibold">
                                            {
                                                candidate.name
                                            }
                                        </h3>

                                    </div>

                                    <div
                                        className={`rounded-xl px-4 py-2 font-semibold ${rec.color}`}
                                    >
                                        {
                                            rec.text
                                        }
                                    </div>

                                </div>

                                <div className="mt-6">

                                    <div className="mb-2 flex items-center justify-between">

                                        <span className="text-gray-400">
                                            Match
                                            Score
                                        </span>

                                        <span className="text-xl font-bold text-cyan-400">
                                            {
                                                candidate.score
                                            }
                                            %
                                        </span>

                                    </div>

                                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">

                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                                            style={{
                                                width: `${candidate.score}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>
                        );
                    }
                )}

            </div>

        </div>
    );
}