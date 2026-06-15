"use client";

import { motion } from "framer-motion";
import ScoreGauge from "./ScoreGauge";
import { getRecommendation } from "@/lib/recommendation";
import { getCandidateFit } from "@/lib/candidateFit";

export default function ResultsCard({ result }) {
    if (!result) return null;


    const ai = getRecommendation({
        match_score: result.final_score,
    });

    const fit = getCandidateFit(
        result.final_score
    );

    const hiringRecommendation =
        result.final_score >= 80
            ? "Strongly Recommended"
            : result.final_score >= 65
                ? "Recommended"
                : result.final_score >= 50
                    ? "Consider"
                    : "Not Recommended";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                <h2 className="mb-10 text-center text-4xl font-bold">
                    AI Analysis Report
                </h2>

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <ScoreGauge
                            score={
                                result.final_score
                            }
                        />

                        <div className="mt-6 text-center">

                            <h3 className="text-2xl font-bold text-violet-400">
                                AI Candidate Fit
                            </h3>

                            <p className="mt-3 text-gray-400">
                                {ai.recommendation}
                            </p>

                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                                <p className="text-sm text-gray-400">
                                    Semantic Score
                                </p>

                                <p className="mt-2 text-3xl font-bold text-cyan-400">
                                    {result.semantic_score}%
                                </p>

                            </div>

                            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

                                <p className="text-sm text-gray-400">
                                    Skill Coverage
                                </p>

                                <p className="mt-2 text-3xl font-bold text-violet-400">
                                    {result.skill_score}%
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

                            <p className="text-sm text-gray-400">
                                Final AI Score
                            </p>

                            <p className="mt-2 text-5xl font-bold text-emerald-400">
                                {result.final_score}%
                            </p>

                            <p className="mt-2 text-sm text-gray-400">
                                Powered by Sentence Transformers + FAISS
                            </p>

                        </div>

                        <div className="mt-5 text-center">

                            <p
                                className={`text-3xl font-bold ${fit.color}`}
                            >
                                {fit.label}
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="space-y-6">

                        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-green-400">
                                Matched Skills
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {result.matched_skills?.length > 0 ? (
                                    result.matched_skills.map(
                                        (skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full bg-green-500/20 px-4 py-2"
                                            >
                                                ✓ {skill}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <p className="text-gray-400">
                                        No matched skills found
                                    </p>
                                )}

                            </div>

                        </div>

                        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-red-400">
                                Missing Skills
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {result.missing_skills?.length > 0 ? (
                                    result.missing_skills.map(
                                        (skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full bg-red-500/20 px-4 py-2"
                                            >
                                                ✗ {skill}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <p className="text-green-300">
                                        No missing skills 🎉
                                    </p>
                                )}

                            </div>

                        </div>

                        {/* Recruiter Insights */}

                        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-violet-400">
                                Recruiter Insights
                            </h3>

                            <div className="space-y-3 text-gray-300">

                                <p>
                                    Resume Length:
                                    {" "}
                                    {result.resume_length}
                                </p>

                                <p>
                                    Skill Coverage:
                                    {" "}
                                    {result.skill_score}%
                                </p>

                                <p>
                                    Semantic Relevance:
                                    {" "}
                                    {result.semantic_score}%
                                </p>

                                <p>
                                    Hiring Recommendation:
                                    {" "}
                                    <span className="font-semibold text-white">
                                        {hiringRecommendation}
                                    </span>
                                </p>

                            </div>

                        </div>

                        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-blue-400">
                                AI Recommendations
                            </h3>

                            <div className="space-y-3">

                                {result.recommendations?.length > 0 ? (
                                    result.recommendations.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="rounded-xl bg-blue-500/10 px-4 py-3"
                                            >
                                                ✓ {item}
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p className="text-green-300">
                                        Resume is well aligned with the job description.
                                    </p>
                                )}

                            </div>

                        </div>

                        {/* Strengths */}

                        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-green-400">
                                💪 Candidate Strengths
                            </h3>

                            <div className="space-y-3">

                                {result.strengths?.length > 0 ? (
                                    result.strengths.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="rounded-xl bg-green-500/10 px-4 py-3"
                                            >
                                                ✓ {item}
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p className="text-gray-400">
                                        No major strengths detected.
                                    </p>
                                )}

                            </div>

                        </div>


                        {/* Weaknesses */}

                        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6">

                            <h3 className="mb-4 text-xl font-bold text-orange-400">
                                ⚠ Areas To Improve
                            </h3>

                            <div className="space-y-3">

                                {result.weaknesses?.length > 0 ? (
                                    result.weaknesses.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="rounded-xl bg-orange-500/10 px-4 py-3"
                                            >
                                                • {item}
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p className="text-green-300">
                                        No major weaknesses detected.
                                    </p>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    );

}
