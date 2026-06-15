"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/constants/features";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Powerful AI Features
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Everything you need to evaluate resumes
                        intelligently.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="group border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10">
                                    <CardContent className="p-6">

                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                                            <Icon className="h-6 w-6 text-violet-400" />
                                        </div>

                                        <h3 className="mb-3 text-xl font-semibold text-white">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-gray-400">
                                            {feature.description}
                                        </p>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}