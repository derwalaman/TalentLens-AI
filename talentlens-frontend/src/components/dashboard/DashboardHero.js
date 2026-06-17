"use client";

import {
    Brain,
    Trophy,
    Sparkles,
} from "lucide-react";

export default function DashboardHero() {

    return (

        <section className="mb-14">

            <div
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                "
            >
                <Sparkles className="h-4 w-4" />
                Recruitment Intelligence Platform
            </div>

            <h1
                className="
                    mt-6
                    text-5xl
                    font-black
                    md:text-7xl
                "
            >
                Recruiter
                <span
                    className="
                        bg-gradient-to-r
                        from-cyan-400
                        via-violet-400
                        to-fuchsia-400
                        bg-clip-text
                        text-transparent
                    "
                >
                    {" "}Dashboard
                </span>
            </h1>

            <p
                className="
                    mt-5
                    max-w-3xl
                    text-lg
                    text-gray-400
                "
            >
                Upload resumes, rank applicants,
                analyze skill coverage, identify
                hiring gaps, and shortlist the best
                talent using AI-powered ATS scoring.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                    "
                >
                    <Brain className="h-5 w-5 text-cyan-400" />
                    AI Candidate Evaluation
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                    "
                >
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    Smart Ranking System
                </div>

            </div>

        </section>

    );

}