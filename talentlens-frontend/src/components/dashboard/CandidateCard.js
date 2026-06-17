"use client";

import { useState } from "react";

import {
    Crown,
    Eye,
    Sparkles,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

import CandidateModal from "./CandidateModal";

export default function CandidateCard({
    candidate,
    rank,
}) {

    const [open, setOpen] =
        useState(false);

    const score =
        candidate.final_score || 0;

    const recommendation =
        score >= 80
            ? "Strongly Recommended"
            : score >= 65
                ? "Recommended"
                : score >= 50
                    ? "Consider"
                    : "Not Recommended";

    const recommendationColor =
        score >= 80
            ? "text-emerald-400"
            : score >= 65
                ? "text-cyan-400"
                : score >= 50
                    ? "text-yellow-400"
                    : "text-red-400";

    return (
        <>
            <div
                className={`
                    rounded-[32px]
                    border
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20

                    ${rank === 1
                        ? "border-yellow-500/30 bg-yellow-500/[0.04]"
                        : "border-white/10 bg-white/[0.03]"
                    }
                `}
            >

                {/* TOP BADGE */}

                <div
                    className="
                        mb-6
                        flex
                        flex-wrap
                        items-center
                        gap-3
                    "
                >

                    <span
                        className="
                            rounded-full
                            bg-violet-500/15
                            px-4
                            py-1.5
                            text-sm
                            font-semibold
                            text-violet-300
                        "
                    >
                        Rank #{rank}
                    </span>

                    {rank === 1 && (
                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-yellow-500/15
                                px-4
                                py-1.5
                                text-sm
                                font-semibold
                                text-yellow-400
                            "
                        >
                            <Crown className="h-4 w-4" />
                            Top Candidate
                        </span>
                    )}

                </div>

                {/* HEADER */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                    "
                >

                    <div>

                        <h3
                            className="
                                text-2xl
                                font-black
                            "
                        >
                            {candidate.name}
                        </h3>

                        {candidate.job_title && (
                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-gray-400
                                "
                            >
                                {candidate.job_title}
                            </p>
                        )}

                    </div>

                    <div className="text-right">

                        <p className="text-sm text-gray-500">
                            ATS Score
                        </p>

                        <p
                            className="
                                text-5xl
                                font-black
                                text-emerald-400
                            "
                        >
                            {score}%
                        </p>

                    </div>

                </div>

                {/* SCORE CARDS */}

                <div
                    className="
                        mt-7
                        grid
                        gap-4
                        md:grid-cols-3
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            bg-cyan-500/10
                            p-4
                        "
                    >
                        <p className="text-sm text-gray-400">
                            Semantic Match
                        </p>

                        <p
                            className="
                                mt-1
                                text-2xl
                                font-bold
                                text-cyan-400
                            "
                        >
                            {candidate.semantic_score}%
                        </p>
                    </div>

                    <div
                        className="
                            rounded-2xl
                            bg-violet-500/10
                            p-4
                        "
                    >
                        <p className="text-sm text-gray-400">
                            Skill Match
                        </p>

                        <p
                            className="
                                mt-1
                                text-2xl
                                font-bold
                                text-violet-400
                            "
                        >
                            {candidate.skill_score}%
                        </p>
                    </div>

                    <div
                        className="
                            rounded-2xl
                            bg-emerald-500/10
                            p-4
                        "
                    >
                        <p className="text-sm text-gray-400">
                            Matched Skills
                        </p>

                        <p
                            className="
                                mt-1
                                text-2xl
                                font-bold
                                text-emerald-400
                            "
                        >
                            {candidate.matched_skills?.length || 0}
                        </p>
                    </div>

                </div>

                {/* HIRING DECISION */}

                <div className="mt-6">

                    <p className="text-sm text-gray-400">
                        Hiring Recommendation
                    </p>

                    <p
                        className={`
                            mt-1
                            text-xl
                            font-bold
                            ${recommendationColor}
                        `}
                    >
                        {recommendation}
                    </p>

                </div>

                {/* SUMMARY */}

                {candidate.candidate_summary && (

                    <div
                        className="
                            mt-6
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/5
                            p-4
                        "
                    >

                        <div
                            className="
                                mb-2
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Sparkles
                                className="
                                    h-4
                                    w-4
                                    text-cyan-400
                                "
                            />

                            <span
                                className="
                                    text-sm
                                    font-semibold
                                    text-cyan-400
                                "
                            >
                                AI Summary
                            </span>

                        </div>

                        <p
                            className="
                                line-clamp-3
                                text-sm
                                text-gray-300
                            "
                        >
                            {typeof candidate.candidate_summary === "string"
                                ? candidate.candidate_summary
                                : "AI-generated structured candidate assessment available."}
                        </p>

                    </div>

                )}

                {/* TOP SKILLS */}

                {candidate.matched_skills?.length > 0 && (

                    <div className="mt-6">

                        <p
                            className="
                                mb-3
                                text-sm
                                text-gray-400
                            "
                        >
                            Top Matched Skills
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-2
                            "
                        >

                            {candidate.matched_skills
                                .slice(0, 6)
                                .map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            rounded-full
                                            bg-green-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            text-green-300
                                        "
                                    >
                                        {skill}
                                    </span>

                                ))}

                        </div>

                    </div>

                )}

                {/* QUICK INSIGHTS */}

                <div
                    className="
                        mt-6
                        grid
                        gap-4
                        md:grid-cols-2
                    "
                >

                    <div>

                        <p
                            className="
                                mb-2
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-green-400
                            "
                        >
                            <CheckCircle2
                                className="h-4 w-4"
                            />
                            Strengths
                        </p>

                        <ul
                            className="
                                space-y-1
                                text-sm
                                text-gray-300
                            "
                        >

                            {(candidate.strengths || [])
                                .slice(0, 2)
                                .map((item, i) => (
                                    <li key={i}>
                                        • {item}
                                    </li>
                                ))}

                        </ul>

                    </div>

                    <div>

                        <p
                            className="
                                mb-2
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-orange-400
                            "
                        >
                            <AlertTriangle
                                className="h-4 w-4"
                            />
                            Gaps
                        </p>

                        <ul
                            className="
                                space-y-1
                                text-sm
                                text-gray-300
                            "
                        >

                            {(candidate.weaknesses || [])
                                .slice(0, 2)
                                .map((item, i) => (
                                    <li key={i}>
                                        • {item}
                                    </li>
                                ))}

                        </ul>

                    </div>

                </div>

                {/* ACTION */}

                <div
                    className="
                        mt-8
                        flex
                        justify-end
                    "
                >

                    <button
                        onClick={() =>
                            setOpen(true)
                        }
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-violet-600
                            px-5
                            py-3
                            font-semibold
                            transition
                            hover:bg-violet-500
                        "
                    >
                        <Eye className="h-4 w-4" />
                        View Full Analysis
                    </button>

                </div>

            </div>

            <CandidateModal
                candidate={candidate}
                open={open}
                onClose={() =>
                    setOpen(false)
                }
            />
        </>
    );
}