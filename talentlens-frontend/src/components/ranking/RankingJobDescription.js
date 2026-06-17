"use client";

export default function RankingJobDescription({
    value,
    setValue,
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

            {/* Header */}

            <div className="mb-6">

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
                    Hiring Requirements
                </span>

                <h2
                    className="
                        mt-4
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
                    Paste the complete job description
                    to rank candidates against required
                    skills, tools, experience and role fit.
                </p>

            </div>

            {/* Textarea */}

            <textarea
                value={value}
                onChange={(e) =>
                    setValue(
                        e.target.value
                    )
                }
                rows={15}
                placeholder="
Example:

Senior Full Stack Developer

Requirements:
• React / Next.js
• Node.js / FastAPI
• PostgreSQL
• AWS
• 3+ years experience

Responsibilities:
• Build scalable web applications
• Collaborate with product teams
                "
                className="
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/30
                    p-5
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-600
                    focus:border-violet-500
                    focus:bg-black/40
                "
            />

            {/* Footer */}

            <div
                className="
                    mt-4
                    flex
                    flex-col
                    gap-3
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >

                <div
                    className="
                        flex
                        flex-wrap
                        gap-2
                    "
                >

                    <span
                        className="
                            rounded-full
                            bg-cyan-500/10
                            px-3
                            py-1
                            text-xs
                            text-cyan-300
                        "
                    >
                        Skills
                    </span>

                    <span
                        className="
                            rounded-full
                            bg-violet-500/10
                            px-3
                            py-1
                            text-xs
                            text-violet-300
                        "
                    >
                        Experience
                    </span>

                    <span
                        className="
                            rounded-full
                            bg-green-500/10
                            px-3
                            py-1
                            text-xs
                            text-green-300
                        "
                    >
                        Responsibilities
                    </span>

                </div>

                <div
                    className="
                        text-sm
                        text-gray-500
                    "
                >
                    {value.length.toLocaleString()}
                    {" "}
                    characters
                </div>

            </div>

            {/* Tips */}

            <div
                className="
                    mt-6
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    p-4
                "
            >

                <p
                    className="
                        text-sm
                        text-cyan-300
                    "
                >
                    💡 Better rankings come from detailed job
                    descriptions containing skills, tools,
                    responsibilities and experience requirements.
                </p>

            </div>

        </div>

    );

}