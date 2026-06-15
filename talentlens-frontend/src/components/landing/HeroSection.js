"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 py-28">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />
            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-600/20 blur-[150px]" />
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                            AI Recruitment Intelligence
                        </span>

                        <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                            Hire Smarter with
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}
                                AI Intelligence
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-gray-400">
                            {SITE_CONFIG.description}
                        </p>

                        <div className="mt-8 flex gap-4">
                            <Button size="lg">
                                Analyze Resume
                            </Button>

                            <Button variant="outline" size="lg">
                                View Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                            <h3 className="mb-6 text-2xl font-bold text-white">
                                Resume Analysis
                            </h3>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-emerald-500/10 p-4">
                                    <p className="text-emerald-400">
                                        Match Score: 92%
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <p className="text-white">✓ Python</p>
                                    <p className="text-white">✓ FastAPI</p>
                                    <p className="text-white">✓ Machine Learning</p>
                                </div>

                                <div className="rounded-xl bg-red-500/10 p-4">
                                    <p className="text-red-400">✗ Docker</p>
                                    <p className="text-red-400">✗ AWS</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}