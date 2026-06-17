"use client";

import {
    FileText,
    Briefcase,
    Sparkles,
} from "lucide-react";

export default function JobDescriptionInput({
    value,
    setValue,
}) {

    const wordCount =
        value.trim().length > 0
            ? value.trim().split(/\s+/).length
            : 0;

    return (

        <div
            className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
            "
        >

            {/* Header */}

            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <div
                        className="
                            mb-3
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-violet-500/20
                            bg-violet-500/10
                            px-3
                            py-1
                            text-xs
                            text-violet-300
                        "
                    >
                        <Sparkles
                            className="
                                h-3
                                w-3
                            "
                        />
                        AI Job Matching
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-black
                        "
                    >
                        Job Description
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Paste the hiring requirements,
                        responsibilities, skills,
                        and qualifications.
                    </p>

                </div>

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-violet-500/10
                        text-violet-400
                    "
                >

                    <Briefcase
                        className="
                            h-7
                            w-7
                        "
                    />

                </div>

            </div>

            {/* Stats */}

            <div
                className="
                    mb-5
                    flex
                    flex-wrap
                    gap-3
                "
            >

                <div
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-2
                        text-sm
                    "
                >
                    Characters:
                    <span
                        className="
                            ml-2
                            font-semibold
                            text-cyan-400
                        "
                    >
                        {value.length}
                    </span>
                </div>

                <div
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-2
                        text-sm
                    "
                >
                    Words:
                    <span
                        className="
                            ml-2
                            font-semibold
                            text-violet-400
                        "
                    >
                        {wordCount}
                    </span>
                </div>

            </div>

            {/* Textarea */}

            <div className="relative">

                <FileText
                    className="
                        absolute
                        left-5
                        top-5
                        h-5
                        w-5
                        text-gray-500
                    "
                />

                <textarea
                    value={value}
                    onChange={(e) =>
                        setValue(
                            e.target.value
                        )
                    }
                    rows={15}
                    placeholder="Paste the Job Description here...

Example:

• Required Skills:
Python, FastAPI, React

• Experience:
3+ Years

• Responsibilities:
Build AI-powered web applications
Design APIs
Work with vector databases
..."
                    className="
                        h-[420px]
                        w-full
                        resize-none
                        rounded-[28px]
                        border
                        border-white/10
                        bg-black/30
                        pl-14
                        pr-5
                        pt-5
                        text-gray-200
                        outline-none
                        transition
                        placeholder:text-gray-600
                        focus:border-violet-500/40
                        focus:bg-black/40
                    "
                />

            </div>

            {/* Footer */}

            <div
                className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    text-sm
                    text-gray-500
                "
            >

                <span>
                    Better job descriptions
                    improve ranking accuracy.
                </span>

                <span>
                    AI Parsing Enabled
                </span>

            </div>

        </div>

    );

}