"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    ArrowRight,
    Sparkles,
    BrainCircuit,
    Trophy,
    BarChart3,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {

    return (

        <section
            className="
                relative
                overflow-hidden
                px-6
                pt-20
                pb-16
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    left-[-150px]
                    top-[-100px]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-violet-600/20
                    blur-[180px]
                "
            />

            <div
                className="
                    absolute
                    right-[-150px]
                    bottom-[-100px]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-cyan-600/20
                    blur-[180px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1400px]
                "
            >

                <div
                    className="
                        grid
                        items-center
                        gap-12
                        lg:grid-cols-2
                    "
                >

                    {/* LEFT */}

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
                            duration: 0.7,
                        }}
                    >

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
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

                            <Sparkles
                                className="h-4 w-4"
                            />

                            AI Recruitment Platform

                        </div>

                        <h1
                            className="
                                mt-8
                                text-5xl
                                font-black
                                leading-[1.05]
                                md:text-7xl
                            "
                        >

                            Find The

                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-violet-400
                                    via-fuchsia-400
                                    to-cyan-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Best Candidate
                            </span>

                            In Minutes.

                        </h1>

                        <p
                            className="
                                mt-8
                                max-w-2xl
                                text-lg
                                leading-8
                                text-gray-400
                            "
                        >
                            Analyze resumes, compare candidates,
                            identify skill gaps and rank applicants
                            using AI-powered semantic intelligence.
                        </p>

                        {/* CTA */}

                        <div
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-4
                            "
                        >

                            <Link href="/matcher">

                                <Button
                                    size="lg"
                                    className="
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-violet-600
                                        to-fuchsia-600
                                        px-8
                                        shadow-lg
                                        shadow-violet-500/30
                                    "
                                >

                                    Start Matching

                                    <ArrowRight
                                        className="
                                            ml-2
                                            h-4
                                            w-4
                                        "
                                    />

                                </Button>

                            </Link>

                            <Link href="/dashboard">

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="
                                        rounded-xl
                                        border-white/20
                                    "
                                >
                                    Recruiter Dashboard
                                </Button>

                            </Link>

                        </div>

                        {/* Stats */}

                        <div
                            className="
                                mt-12
                                grid
                                grid-cols-3
                                gap-8
                                max-w-xl
                            "
                        >

                            <div>

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                        text-violet-400
                                    "
                                >
                                    95%
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    ATS Accuracy
                                </p>

                            </div>

                            <div>

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                        text-cyan-400
                                    "
                                >
                                    AI
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    Parsing Engine
                                </p>

                            </div>

                            <div>

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                        text-emerald-400
                                    "
                                >
                                    5+
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    Recruiter Tools
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <div
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-8
                                backdrop-blur-2xl
                            "
                        >

                            <h3
                                className="
                                    mb-8
                                    text-2xl
                                    font-bold
                                "
                            >
                                TalentLens Tools
                            </h3>

                            <div
                                className="
                                    grid
                                    gap-4
                                "
                            >

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                    <div className="flex items-center gap-3">

                                        <BrainCircuit
                                            className="text-violet-400"
                                        />

                                        Resume Matcher

                                    </div>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                    <div className="flex items-center gap-3">

                                        <Users
                                            className="text-cyan-400"
                                        />

                                        Candidate Compare

                                    </div>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                    <div className="flex items-center gap-3">

                                        <Trophy
                                            className="text-yellow-400"
                                        />

                                        Resume Ranking

                                    </div>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                    <div className="flex items-center gap-3">

                                        <BarChart3
                                            className="text-emerald-400"
                                        />

                                        Recruiter Dashboard

                                    </div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );
}