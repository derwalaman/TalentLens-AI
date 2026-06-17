"use client";

import {
    Briefcase,
    Sparkles,
} from "lucide-react";

export default function JobDescriptionInput({
    jobDescription,
    setJobDescription,
}) {

    return (

        <div
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    -right-24
                    -bottom-24
                    h-60
                    w-60
                    rounded-full
                    bg-cyan-600/10
                    blur-[100px]
                "
            />

            <div className="relative z-10">

                {/* Header */}

                <div className="mb-6">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            px-3
                            py-1.5
                            text-xs
                            text-cyan-300
                        "
                    >

                        <Sparkles
                            className="h-3.5 w-3.5"
                        />

                        Job Requirements

                    </div>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-bold
                        "
                    >
                        Paste Job Description
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Add the target job description so AI can
                        compare requirements against the candidate.
                    </p>

                </div>

                {/* Editor */}

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-black/30
                        p-4
                    "
                >

                    <textarea
                        value={jobDescription}
                        onChange={(e) =>
                            setJobDescription(
                                e.target.value
                            )
                        }
                        placeholder="Paste complete job description, requirements, responsibilities, qualifications and skills..."
                        className="
                            h-[320px]
                            w-full
                            resize-none
                            bg-transparent
                            text-white
                            placeholder:text-gray-500
                            outline-none
                        "
                    />

                </div>

                {/* Footer */}

                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white/[0.04]
                            px-4
                            py-2
                            text-sm
                            text-gray-400
                        "
                    >

                        <Briefcase
                            className="h-4 w-4"
                        />

                        AI will extract skills, tools &
                        responsibilities

                    </div>

                    <div
                        className={`
                            rounded-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            ${jobDescription.length > 50
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-white/[0.04] text-gray-400"
                            }
                        `}
                    >

                        {jobDescription.length}
                        {" "}
                        Characters

                    </div>

                </div>

            </div>

        </div>

    );

}