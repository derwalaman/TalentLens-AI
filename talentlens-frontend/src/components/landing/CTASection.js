"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
    ArrowRight,
    Sparkles,
    FileSearch,
    GitCompare,
    Trophy,
    LayoutDashboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTASection() {

    const tools = [
        {
            icon: FileSearch,
            label: "Resume Matcher",
        },
        {
            icon: GitCompare,
            label: "Compare Candidates",
        },
        {
            icon: Trophy,
            label: "AI Ranking",
        },
        {
            icon: LayoutDashboard,
            label: "Recruiter Dashboard",
        },
    ];

    return (

        <section
            className="
            relative
            px-6
            pt-10
            pb-15
        "
        >

            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-violet-600/15
                    via-[#0b0b0b]
                    to-cyan-600/15
                    p-8
                    md:p-12
                "
                >

                    {/* Glow Effects */}

                    <div
                        className="
                        absolute
                        left-1/2
                        top-0
                        h-[400px]
                        w-[400px]
                        -translate-x-1/2
                        rounded-full
                        bg-violet-600/20
                        blur-[180px]
                    "
                    />

                    <div
                        className="
                        absolute
                        bottom-0
                        right-0
                        h-[300px]
                        w-[300px]
                        rounded-full
                        bg-cyan-600/10
                        blur-[150px]
                    "
                    />

                    <div className="relative z-10">

                        {/* Badge */}

                        <div
                            className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-violet-500/20
                        "
                        >
                            <Sparkles
                                className="
                                h-8
                                w-8
                                text-violet-400
                            "
                            />
                        </div>

                        {/* Heading */}

                        <h2
                            className="
                            mt-8
                            text-center
                            text-4xl
                            font-black
                            leading-tight
                            md:text-6xl
                        "
                        >

                            Ready To Build

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
                                Smarter Hiring?
                            </span>

                        </h2>

                        <p
                            className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-center
                            text-lg
                            leading-8
                            text-gray-400
                        "
                        >
                            Analyze resumes, compare candidates,
                            rank applicants, detect skill gaps and
                            generate recruiter-ready insights using
                            AI-powered semantic intelligence.
                        </p>

                        {/* CTA Buttons */}

                        <div
                            className="
                            mt-10
                            flex
                            flex-wrap
                            justify-center
                            gap-4
                        "
                        >

                            <Link href="/matcher">

                                <Button
                                    size="lg"
                                    className="
                                    bg-violet-600
                                    hover:bg-violet-700
                                    shadow-lg
                                    shadow-violet-600/20
                                "
                                >

                                    Analyze Resume

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
                                    size="lg"
                                    variant="outline"
                                    className="
                                    border-white/20
                                    bg-white/[0.02]
                                    hover:bg-white/[0.06]
                                "
                                >
                                    Open Dashboard
                                </Button>

                            </Link>

                        </div>

                        {/* Product Modules */}

                        <div
                            className="
                            mt-8
                            grid
                            gap-4
                            md:grid-cols-4
                        "
                        >

                            {tools.map(
                                (
                                    item,
                                    index
                                ) => {

                                    const Icon =
                                        item.icon;

                                    return (

                                        <div
                                            key={index}
                                            className="
                                            group
                                            rounded-3xl
                                            border
                                            border-white/10
                                            bg-gradient-to-br
                                            from-white/[0.06]
                                            to-white/[0.02]
                                            p-5
                                            text-center
                                            backdrop-blur-xl
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-violet-500/40
                                            hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
                                        "
                                        >

                                            <Icon
                                                className="
                                                mx-auto
                                                mb-3
                                                h-6
                                                w-6
                                                text-violet-400
                                            "
                                            />

                                            <p
                                                className="
                                                text-sm
                                                font-medium
                                            "
                                            >
                                                {item.label}
                                            </p>

                                        </div>

                                    );
                                }
                            )}

                        </div>

                        {/* Stats */}

                        <div
                            className="
                            mt-8
                            grid
                            gap-6
                            text-center
                            md:grid-cols-3
                        "
                        >

                            <div>

                                <h3
                                    className="
                                    text-4xl
                                    font-bold
                                    text-violet-400
                                "
                                >
                                    ATS
                                </h3>

                                <p className="text-gray-400">
                                    Resume Intelligence
                                </p>

                            </div>

                            <div>

                                <h3
                                    className="
                                    text-4xl
                                    font-bold
                                    text-cyan-400
                                "
                                >
                                    AI
                                </h3>

                                <p className="text-gray-400">
                                    Candidate Evaluation
                                </p>

                            </div>

                            <div>

                                <h3
                                    className="
                                    text-4xl
                                    font-bold
                                    text-emerald-400
                                "
                                >
                                    4
                                </h3>

                                <p className="text-gray-400">
                                    Recruiter Modules
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}
