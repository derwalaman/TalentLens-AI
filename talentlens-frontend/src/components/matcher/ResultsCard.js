"use client";

import { motion } from "framer-motion";

export default function ResultsCard({ result }) {
    if (!result) return null;

    const score = result.final_score || 0;

    const recommendation =
        score >= 80
            ? "Strongly Recommended"
            : score >= 65
                ? "Recommended"
                : score >= 50
                    ? "Consider"
                    : "Not Recommended";

    const bannerColor =
        score >= 80
            ? "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20"
            : score >= 65
                ? "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20"
                : score >= 50
                    ? "from-yellow-500/20 to-yellow-600/10 border-yellow-500/20"
                    : "from-red-500/20 to-red-600/10 border-red-500/20";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className="mt-16"
        >
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    md:p-10
                    backdrop-blur-xl
                "
            >
                {/* Glow */}
                <div
                    className="
                        absolute
                        left-0
                        top-0
                        h-[300px]
                        w-[300px]
                        rounded-full
                        bg-violet-600/10
                        blur-[140px]
                    "
                />

                <div
                    className="
                        absolute
                        right-0
                        bottom-0
                        h-[300px]
                        w-[300px]
                        rounded-full
                        bg-cyan-600/10
                        blur-[140px]
                    "
                />

                <div className="relative z-10">

                    {/* Header */}

                    <div className="text-center">

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
                            AI Candidate Evaluation
                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                font-black
                                md:text-6xl
                            "
                        >
                            AI Recruiter Report
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-2xl
                                text-gray-400
                            "
                        >
                            Semantic analysis, ATS scoring,
                            recruiter insights and skill-gap evaluation.
                        </p>

                    </div>

                    {/* Hiring Banner */}

                    <div
                        className={`
                            mt-10
                            rounded-3xl
                            border
                            bg-gradient-to-r
                            p-8
                            ${bannerColor}
                        `}
                    >
                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.2em]
                                text-gray-400
                            "
                        >
                            Hiring Recommendation
                        </p>

                        <h3
                            className="
                                mt-3
                                text-4xl
                                font-black
                            "
                        >
                            {recommendation}
                        </h3>

                        {result.job_title && (
                            <p
                                className="
                                    mt-3
                                    text-xl
                                    text-gray-300
                                "
                            >
                                {result.job_title}
                            </p>
                        )}

                        <p
                            className="
                                mt-4
                                text-6xl
                                font-black
                            "
                        >
                            {result.final_score}%
                        </p>
                    </div>

                    {/* Summary */}

                    {
                        result.candidate_summary && (

                            <div
                                className="
                mt-8
                rounded-3xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                p-6
            "
                            >

                                <h3
                                    className="
                    mb-5
                    text-2xl
                    font-bold
                    text-cyan-400
                "
                                >
                                    Executive Summary
                                </h3>

                                <div className="grid gap-4 md:grid-cols-2">

                                    <div className="rounded-2xl bg-black/20 p-4">
                                        <p className="text-sm text-gray-400">
                                            Overall Fit
                                        </p>

                                        <p className="mt-2 text-xl font-bold">
                                            {
                                                result.candidate_summary
                                                    ?.overall_fit
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/20 p-4">
                                        <p className="text-sm text-gray-400">
                                            Recommendation
                                        </p>

                                        <p className="mt-2 text-xl font-bold">
                                            {
                                                result.candidate_summary
                                                    ?.recommendation
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/20 p-4">
                                        <p className="text-sm text-gray-400">
                                            Experience Strength
                                        </p>

                                        <p className="mt-2 text-xl font-bold">
                                            {
                                                result.candidate_summary
                                                    ?.experience_strength
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/20 p-4">
                                        <p className="text-sm text-gray-400">
                                            Project Strength
                                        </p>

                                        <p className="mt-2 text-xl font-bold">
                                            {
                                                result.candidate_summary
                                                    ?.project_strength
                                            }
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/20 p-4 md:col-span-2">
                                        <p className="text-sm text-gray-400">
                                            Skill Strength
                                        </p>

                                        <p className="mt-2 text-xl font-bold">
                                            {
                                                result.candidate_summary
                                                    ?.skill_strength
                                            }
                                        </p>
                                    </div>

                                </div>

                                {
                                    result.candidate_summary
                                        ?.suitable_roles?.length > 0 && (

                                        <div className="mt-6">

                                            <h4
                                                className="
                                mb-3
                                text-lg
                                font-semibold
                            "
                                            >
                                                Suitable Roles
                                            </h4>

                                            <div className="flex flex-wrap gap-3">

                                                {
                                                    result.candidate_summary
                                                        .suitable_roles.map(
                                                            (
                                                                role,
                                                                index
                                                            ) => (
                                                                <span
                                                                    key={index}
                                                                    className="
                                                    rounded-full
                                                    bg-cyan-500/20
                                                    px-4
                                                    py-2
                                                    text-sm
                                                "
                                                                >
                                                                    {role}
                                                                </span>
                                                            )
                                                        )
                                                }

                                            </div>

                                        </div>

                                    )
                                }

                            </div>

                        )
                    }

                    <div className="my-10 border-t border-white/10" />

                    {/* KPI Cards */}

                    <div
                        className="
                            grid
                            gap-4
                            md:grid-cols-4
                        "
                    >
                        {[
                            {
                                label: "ATS Score",
                                value: `${result.final_score}%`,
                                color: "text-emerald-400",
                            },
                            {
                                label: "Semantic Match",
                                value: `${result.semantic_score}%`,
                                color: "text-cyan-400",
                            },
                            {
                                label: "Skill Coverage",
                                value: `${result.skill_coverage || result.skill_score}%`,
                                color: "text-violet-400",
                            },
                            {
                                label: "Missing Skills",
                                value: result.missing_skills?.length || 0,
                                color: "text-red-400",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-5
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-violet-500/30
                                "
                            >
                                <p className="text-sm text-gray-400">
                                    {item.label}
                                </p>

                                <p
                                    className={`mt-2 text-4xl font-bold ${item.color}`}
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="my-10 border-t border-white/10" />

                    {/* Skills */}

                    <div
                        className="
                            grid
                            gap-6
                            lg:grid-cols-2
                        "
                    >
                        <div
                            className="
                                rounded-3xl
                                border
                                border-green-500/20
                                bg-green-500/10
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            <h3 className="mb-5 text-xl font-bold text-green-400">
                                Matched Skills
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {result.matched_skills?.length ? (
                                    result.matched_skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full bg-green-500/20 px-4 py-2 text-sm"
                                        >
                                            ✓ {skill}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-gray-400">
                                        No matched skills found.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div
                            className="
                                rounded-3xl
                                border
                                border-red-500/20
                                bg-red-500/10
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            <h3 className="mb-5 text-xl font-bold text-red-400">
                                Missing Skills
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {result.missing_skills?.length ? (
                                    result.missing_skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full bg-red-500/20 px-4 py-2 text-sm"
                                        >
                                            ✗ {skill}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-green-300">
                                        No missing skills 🎉
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="my-10 border-t border-white/10" />

                    {/* Strengths & Weaknesses */}

                    <div
                        className="
                            grid
                            gap-6
                            lg:grid-cols-2
                        "
                    >
                        <div
                            className="
                                rounded-3xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                p-6
                            "
                        >
                            <h3 className="mb-5 text-xl font-bold text-emerald-400">
                                Candidate Strengths
                            </h3>

                            <div className="space-y-3">
                                {result.strengths?.length ? (
                                    result.strengths.map((item, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl bg-black/20 p-3"
                                        >
                                            ✓ {item}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400">
                                        No strengths available.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div
                            className="
                                rounded-3xl
                                border
                                border-orange-500/20
                                bg-orange-500/10
                                p-6
                            "
                        >
                            <h3 className="mb-5 text-xl font-bold text-orange-400">
                                Risks & Gaps
                            </h3>

                            <div className="space-y-3">
                                {result.weaknesses?.length ? (
                                    result.weaknesses.map((item, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl bg-black/20 p-3"
                                        >
                                            • {item}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-green-300">
                                        No major weaknesses detected.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="my-10 border-t border-white/10" />

                    {/* JD Breakdown */}

                    <div
                        className="
                            grid
                            gap-6
                            lg:grid-cols-3
                        "
                    >
                        {[
                            {
                                title: "Technical Skills",
                                color: "text-violet-400",
                                bg: "bg-violet-500/20",
                                items: result.technical_skills,
                            },
                            {
                                title: "Tools",
                                color: "text-cyan-400",
                                bg: "bg-cyan-500/20",
                                items: result.tools,
                            },
                            {
                                title: "Soft Skills",
                                color: "text-emerald-400",
                                bg: "bg-emerald-500/20",
                                items: result.soft_skills,
                            },
                        ].map((section) => (
                            <div
                                key={section.title}
                                className="
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-violet-500/20
                                "
                            >
                                <h3
                                    className={`mb-4 text-lg font-bold ${section.color}`}
                                >
                                    {section.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {section.items?.length ? (
                                        section.items.map((item, index) => (
                                            <span
                                                key={index}
                                                className={`rounded-full ${section.bg} px-3 py-1 text-sm`}
                                            >
                                                {item}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">
                                            No data available
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recommendations */}

                    <div
                        className="
                            mt-10
                            rounded-3xl
                            border
                            border-blue-500/20
                            bg-blue-500/10
                            p-6
                        "
                    >
                        <h3
                            className="
                                mb-5
                                text-2xl
                                font-bold
                                text-blue-400
                            "
                        >
                            AI Recommendations
                        </h3>

                        <div className="space-y-3">
                            {result.recommendations?.length ? (
                                result.recommendations.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                            p-4
                                            transition-all
                                            duration-300
                                            hover:border-blue-500/30
                                        "
                                    >
                                        → {item}
                                    </div>
                                ))
                            ) : (
                                <p className="text-green-300">
                                    Resume is well aligned with the job description.
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}