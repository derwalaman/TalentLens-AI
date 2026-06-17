"use client";

import { motion } from "framer-motion";

import {
    Upload,
    FileSearch,
    Brain,
    Target,
    Trophy,
    ArrowRight,
} from "lucide-react";

const icons = [
    Upload,
    FileSearch,
    Brain,
    Target,
    Trophy,
];

export default function HowItWorksSection() {

    const steps = [
        {
            title: "Upload Resume",
            description:
                "Upload one or multiple candidate resumes for AI evaluation.",
        },
        {
            title: "AI Parsing",
            description:
                "Gemini extracts skills, projects, education and experience.",
        },
        {
            title: "Semantic Analysis",
            description:
                "Embeddings and vector search understand context beyond keywords.",
        },
        {
            title: "Candidate Evaluation",
            description:
                "ATS score, skill matching and recruiter insights are generated.",
        },
        {
            title: "Hiring Decision",
            description:
                "Rank candidates and shortlist the strongest applicants instantly.",
        },
    ];

    return (

        <section
            id="how-it-works"
            className="
                relative
                px-6
                py-20
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    right-0
                    top-0
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-cyan-600/10
                    blur-[180px]
                "
            />

            <div className="mx-auto max-w-7xl">

                {/* Heading */}

                <div
                    className="
                        mx-auto
                        mb-16
                        max-w-3xl
                        text-center
                    "
                >

                    <span
                        className="
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
                        AI Recruitment Pipeline
                    </span>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-black
                            md:text-6xl
                        "
                    >

                        From Resume To

                        <span
                            className="
                                block
                                bg-gradient-to-r
                                from-violet-400
                                to-cyan-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Hiring Decision
                        </span>

                    </h2>

                    <p
                        className="
                            mt-5
                            text-lg
                            text-gray-400
                        "
                    >
                        TalentLens combines AI parsing,
                        semantic matching and recruiter
                        intelligence into a single workflow.
                    </p>

                </div>

                {/* Pipeline */}

                <div
                    className="
                        grid
                        gap-6
                        lg:grid-cols-5
                    "
                >

                    {steps.map(
                        (
                            step,
                            index
                        ) => {

                            const Icon =
                                icons[index];

                            return (

                                <motion.div
                                    key={
                                        step.title
                                    }
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
                                    transition={{
                                        delay:
                                            index *
                                            0.1,
                                    }}
                                    className="
                                        relative
                                        flex
                                    "
                                >

                                    <div
                                        className="
                                            group
                                            relative
                                            flex
                                            h-full
                                            min-h-[280px]
                                            flex-col
                                            rounded-3xl
                                            border
                                            border-white/10
                                            bg-white/[0.03]
                                            p-6
                                            backdrop-blur-xl
                                            transition-all
                                            duration-300
                                            hover:-translate-y-2
                                            hover:border-violet-500/30
                                        "
                                    >

                                        {/* Hover Glow */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                rounded-3xl
                                                bg-gradient-to-br
                                                from-violet-500/0
                                                to-cyan-500/0
                                                opacity-0
                                                transition
                                                duration-300
                                                group-hover:opacity-100
                                                group-hover:from-violet-500/5
                                                group-hover:to-cyan-500/5
                                            "
                                        />

                                        <div className="relative z-10">

                                            <div
                                                className="
                                                    flex
                                                    h-14
                                                    w-14
                                                    items-center
                                                    justify-center
                                                    rounded-2xl
                                                    bg-gradient-to-br
                                                    from-violet-500/20
                                                    to-cyan-500/20
                                                "
                                            >

                                                <Icon
                                                    className="
                                                        h-7
                                                        w-7
                                                        text-violet-400
                                                    "
                                                />

                                            </div>

                                            <span
                                                className="
                                                    mt-5
                                                    inline-flex
                                                    rounded-full
                                                    bg-violet-500/10
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold
                                                    text-violet-400
                                                "
                                            >
                                                STEP 0{index + 1}
                                            </span>

                                            <h3
                                                className="
                                                    mt-4
                                                    text-xl
                                                    font-bold
                                                "
                                            >
                                                {step.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-4
                                                    flex-grow
                                                    leading-7
                                                    text-gray-400
                                                "
                                            >
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Connector */}

                                    {index !== 4 && (

                                        <div
                                            className="
                                                absolute
                                                -right-5
                                                top-1/2
                                                hidden
                                                -translate-y-1/2
                                                lg:block
                                            "
                                        >

                                            <ArrowRight
                                                className="
                                                    h-5
                                                    w-5
                                                    text-violet-500
                                                "
                                            />

                                        </div>

                                    )}

                                </motion.div>

                            );
                        }
                    )}

                </div>

            </div>

        </section>

    );

}