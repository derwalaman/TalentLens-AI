"use client";

import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "@/constants/workflow";

export default function HowItWorksSection() {
    return (
        <section
            id="how-it-works"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        How TalentLens AI Works
                    </h2>

                    <p className="mt-4 text-gray-400">
                        A modern AI pipeline powered by semantic understanding.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {WORKFLOW_STEPS.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">

                                <span className="text-4xl font-bold text-violet-400">
                                    {step.step}
                                </span>

                                <h3 className="mt-4 text-xl font-semibold text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    {step.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}