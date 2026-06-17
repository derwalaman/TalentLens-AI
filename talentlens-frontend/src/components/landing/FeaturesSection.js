"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/constants/features";

export default function FeaturesSection() {

    return (

        <section
            id="features"
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
                    left-1/2
                    top-0
                    h-[400px]
                    w-[400px]
                    -translate-x-1/2
                    rounded-full
                    bg-violet-600/10
                    blur-[150px]
                "
            />

            <div className="mx-auto max-w-7xl">

                {/* Heading */}

                <div
                    className="
                        mx-auto
                        mb-14
                        max-w-3xl
                        text-center
                    "
                >

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
                        Platform Features
                    </span>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-black
                            md:text-6xl
                        "
                    >
                        Built For Modern

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
                            AI Recruitment
                        </span>

                    </h2>

                    <p
                        className="
                            mt-5
                            text-lg
                            text-gray-400
                        "
                    >
                        Everything needed to analyze,
                        compare, rank and shortlist
                        candidates using AI.
                    </p>

                </div>

                {/* Cards */}

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {FEATURES.map(
                        (
                            feature,
                            index
                        ) => {

                            const Icon =
                                feature.icon;

                            return (

                                <motion.div
                                    key={
                                        feature.title
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
                                            index * 0.1,
                                    }}
                                >

                                    <div
                                        className="
                                            group
                                            relative
                                            h-full
                                            overflow-hidden
                                            rounded-3xl
                                            border
                                            border-white/10
                                            bg-white/[0.03]
                                            p-7
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
                                                bg-gradient-to-br
                                                from-violet-500/0
                                                via-violet-500/0
                                                to-cyan-500/0
                                                opacity-0
                                                transition
                                                duration-300
                                                group-hover:opacity-100
                                                group-hover:from-violet-500/5
                                                group-hover:to-cyan-500/5
                                            "
                                        />

                                        <div
                                            className="
                                                relative
                                                z-10
                                            "
                                        >

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

                                            <h3
                                                className="
                                                    mt-5
                                                    text-xl
                                                    font-bold
                                                "
                                            >
                                                {
                                                    feature.title
                                                }
                                            </h3>

                                            <p
                                                className="
                                                    mt-3
                                                    text-sm
                                                    leading-7
                                                    text-gray-400
                                                "
                                            >
                                                {
                                                    feature.description
                                                }
                                            </p>

                                            {/* Fake Metric */}

                                            <div
                                                className="
                                                    mt-6
                                                    flex
                                                    items-center
                                                    justify-between
                                                    border-t
                                                    border-white/10
                                                    pt-4
                                                "
                                            >

                                                <span
                                                    className="
                                                        text-xs
                                                        uppercase
                                                        tracking-wider
                                                        text-gray-500
                                                    "
                                                >
                                                    AI Powered
                                                </span>

                                                <span
                                                    className="
                                                        text-sm
                                                        font-semibold
                                                        text-violet-400
                                                    "
                                                >
                                                    Active
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                            );
                        }
                    )}

                </div>

            </div>

        </section>

    );

}