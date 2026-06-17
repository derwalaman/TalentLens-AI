"use client";

import {
    Eye,
    Trophy,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function CandidateTable({
    candidates,
}) {

    if (!candidates?.length)
        return null;

    const getRecommendation = (
        score
    ) => {

        if (score >= 80)
            return {
                text: "Strongly Recommended",
                color:
                    "bg-green-500/20 text-green-300 border-green-500/20",
            };

        if (score >= 65)
            return {
                text: "Recommended",
                color:
                    "bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
            };

        if (score >= 50)
            return {
                text: "Consider",
                color:
                    "bg-yellow-500/20 text-yellow-300 border-yellow-500/20",
            };

        return {
            text: "Not Recommended",
            color:
                "bg-red-500/20 text-red-300 border-red-500/20",
        };

    };

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
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-3xl
                            font-black
                        "
                    >
                        Candidate Table
                    </h2>

                    <p
                        className="
                            mt-1
                            text-gray-400
                        "
                    >
                        Complete recruiter view of all
                        ranked candidates
                    </p>

                </div>

                <div
                    className="
                        rounded-xl
                        bg-violet-500/10
                        px-4
                        py-2
                        text-violet-300
                    "
                >
                    {candidates.length} Candidates
                </div>

            </div>

            <div
                className="
                    overflow-x-auto
                "
            >

                <table
                    className="
                        min-w-full
                        text-sm
                    "
                >

                    <thead>

                        <tr
                            className="
                                border-b
                                border-white/10
                                text-gray-400
                            "
                        >

                            <th className="p-4 text-left">
                                Rank
                            </th>

                            <th className="p-4 text-left">
                                Candidate
                            </th>

                            <th className="p-4 text-center">
                                ATS Score
                            </th>

                            <th className="p-4 text-center">
                                Semantic
                            </th>

                            <th className="p-4 text-center">
                                Skills
                            </th>

                            <th className="p-4 text-center">
                                Matched
                            </th>

                            <th className="p-4 text-center">
                                Missing
                            </th>

                            <th className="p-4 text-center">
                                Recommendation
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {candidates.map(
                            (
                                candidate,
                                index
                            ) => {

                                const rec =
                                    getRecommendation(
                                        candidate.final_score
                                    );

                                return (

                                    <tr
                                        key={`${candidate.name}-${index}`}
                                        className="
                                            border-b
                                            border-white/5
                                            transition
                                            hover:bg-white/[0.03]
                                        "
                                    >

                                        <td className="p-4">

                                            {index === 0 ? (

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        text-yellow-400
                                                    "
                                                >
                                                    <Trophy
                                                        className="
                                                            h-4
                                                            w-4
                                                        "
                                                    />
                                                    #1
                                                </div>

                                            ) : (

                                                <span>
                                                    #{index + 1}
                                                </span>

                                            )}

                                        </td>

                                        <td className="p-4">

                                            <div>

                                                <p
                                                    className="
                                                        font-semibold
                                                    "
                                                >
                                                    {
                                                        candidate.name
                                                    }
                                                </p>

                                                <p
                                                    className="
                                                        text-xs
                                                        text-gray-500
                                                    "
                                                >
                                                    {
                                                        candidate.job_title ||
                                                        "Candidate"
                                                    }
                                                </p>

                                            </div>

                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >

                                            <span
                                                className="
                                                    text-lg
                                                    font-bold
                                                    text-emerald-400
                                                "
                                            >
                                                {
                                                    candidate.final_score
                                                }
                                                %
                                            </span>

                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >
                                            {
                                                candidate.semantic_score
                                            }
                                            %
                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >
                                            {
                                                candidate.skill_score
                                            }
                                            %
                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1
                                                    text-green-400
                                                "
                                            >
                                                <CheckCircle2
                                                    className="
                                                        h-4
                                                        w-4
                                                    "
                                                />

                                                {
                                                    candidate.matched_skills?.length || 0
                                                }
                                            </span>

                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1
                                                    text-red-400
                                                "
                                            >
                                                <AlertCircle
                                                    className="
                                                        h-4
                                                        w-4
                                                    "
                                                />

                                                {
                                                    candidate.missing_skills?.length || 0
                                                }
                                            </span>

                                        </td>

                                        <td
                                            className="
                                                p-4
                                                text-center
                                            "
                                        >

                                            <span
                                                className={`
                                                    rounded-full
                                                    border
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold
                                                    ${rec.color}
                                                `}
                                            >
                                                {rec.text}
                                            </span>

                                        </td>

                                    </tr>

                                );

                            }
                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}