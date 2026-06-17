"use client";

import {
    Trophy,
    Users,
    Star,
    Crown,
} from "lucide-react";

import CandidateCard
    from "./CandidateCard";

export default function CandidateLeaderboard({
    candidates,
}) {

    if (!candidates?.length)
        return null;

    const topCandidate =
        candidates[0];

    const recommendedCount =
        candidates.filter(
            (candidate) =>
                candidate.final_score >= 70
        ).length;

    return (

        <div
            className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
            "
        >

            {/* Header */}

            <div
                className="
                    mb-8
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
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-yellow-500/20
                            bg-yellow-500/10
                            px-3
                            py-1
                            text-xs
                            text-yellow-300
                        "
                    >
                        <Trophy
                            className="
                                h-3
                                w-3
                            "
                        />
                        AI Ranking Engine
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-black
                        "
                    >
                        Candidate Leaderboard
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Ranked candidates based on
                        ATS score, semantic matching,
                        skill coverage and AI evaluation.
                    </p>

                </div>

                <div
                    className="
                        grid
                        grid-cols-3
                        gap-3
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            px-4
                            py-3
                            text-center
                        "
                    >

                        <Users
                            className="
                                mx-auto
                                mb-2
                                h-5
                                w-5
                                text-cyan-400
                            "
                        />

                        <p
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {candidates.length}
                        </p>

                        <p
                            className="
                                text-xs
                                text-gray-500
                            "
                        >
                            Candidates
                        </p>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            px-4
                            py-3
                            text-center
                        "
                    >

                        <Star
                            className="
                                mx-auto
                                mb-2
                                h-5
                                w-5
                                text-green-400
                            "
                        />

                        <p
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {recommendedCount}
                        </p>

                        <p
                            className="
                                text-xs
                                text-gray-500
                            "
                        >
                            Recommended
                        </p>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            px-4
                            py-3
                            text-center
                        "
                    >

                        <Trophy
                            className="
                                mx-auto
                                mb-2
                                h-5
                                w-5
                                text-yellow-400
                            "
                        />

                        <p
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {topCandidate?.final_score || 0}%
                        </p>

                        <p
                            className="
                                text-xs
                                text-gray-500
                            "
                        >
                            Top Score
                        </p>

                    </div>

                </div>

            </div>

            {/* Top Candidate Banner */}

            {topCandidate && (

                <div
                    className="
                        mb-8
                        rounded-3xl
                        border
                        border-yellow-500/20
                        bg-gradient-to-r
                        from-yellow-500/10
                        via-yellow-400/5
                        to-transparent
                        p-6
                    "
                >

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

                        <div
                            className="
                                flex
                                items-center
                                gap-4
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
                                <Crown
                                    className="
                                        h-8
                                        w-8
                                        text-yellow-400
                                    "
                                />
                            </div>

                            <div>

                                <p
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-wider
                                        text-yellow-300
                                    "
                                >
                                    Top Ranked Candidate
                                </p>

                                <h3
                                    className="
                                        mt-1
                                        text-2xl
                                        font-black
                                    "
                                >
                                    {topCandidate.name}
                                </h3>

                            </div>

                        </div>

                        <div
                            className="
                                text-left
                                lg:text-right
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-gray-400
                                "
                            >
                                Final Score
                            </p>

                            <p
                                className="
                                    text-5xl
                                    font-black
                                    text-yellow-400
                                "
                            >
                                {topCandidate.final_score}%
                            </p>

                        </div>

                    </div>

                </div>

            )}

            {/* Candidate List */}

            <div
                className="
                    max-h-[900px]
                    space-y-5
                    overflow-y-auto
                    pr-2
                "
            >

                {candidates.map(
                    (
                        candidate,
                        index
                    ) => (

                        <CandidateCard
                            key={`${candidate.name}-${index}`}
                            rank={index + 1}
                            candidate={candidate}
                        />

                    )
                )}

            </div>

        </div>

    );

}