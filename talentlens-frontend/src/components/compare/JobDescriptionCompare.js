"use client";

import {
    BriefcaseBusiness,
    FileSearch,
} from "lucide-react";

export default function JobDescriptionCompare({
    jobDescription,
    setJobDescription,
}) {

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

            <div
                className="
                    mb-6
                    flex
                    items-center
                    gap-4
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
                        bg-violet-500/10
                    "
                >

                    <BriefcaseBusiness
                        className="
                            h-7
                            w-7
                            text-violet-400
                        "
                    />

                </div>

                <div>

                    <h2
                        className="
                            text-2xl
                            font-bold
                        "
                    >
                        Job Description
                    </h2>

                    <p
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        Target role requirements
                    </p>

                </div>

            </div>

            <textarea
                value={jobDescription}
                onChange={(e) =>
                    setJobDescription(
                        e.target.value
                    )
                }
                placeholder="
Paste the complete job description here...

Include:
• Required Skills
• Responsibilities
• Experience Requirements
• Preferred Qualifications
"
                className="
                    h-[320px]
                    w-full
                    resize-none
                    rounded-[24px]
                    border
                    border-white/10
                    bg-black/40
                    p-5
                    text-gray-200
                    outline-none
                    transition-all
                    duration-300
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-500/20
                "
            />

            <div
                className="
                    mt-4
                    flex
                    items-center
                    justify-between
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                    "
                >

                    <FileSearch
                        className="
                            h-4
                            w-4
                        "
                    />

                    AI will compare both candidates
                    against this JD

                </div>

                <div
                    className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-1.5
                        text-sm
                        text-gray-400
                    "
                >
                    {jobDescription.length} chars
                </div>

            </div>

        </div>

    );

}