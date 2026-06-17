"use client";

import {
    BarChart3,
    TrendingUp,
} from "lucide-react";

export default function SkillDistribution({
    candidates,
}) {

    const skillMap = {};

    candidates.forEach(
        (candidate) => {

            candidate.matched_skills?.forEach(
                (skill) => {

                    skillMap[skill] =
                        (skillMap[skill] || 0) + 1;

                }
            );

        }
    );

    const skills = Object.entries(
        skillMap
    )
        .sort(
            (a, b) => b[1] - a[1]
        )
        .slice(0, 15);

    const maxCount =
        skills.length > 0
            ? skills[0][1]
            : 1;

    const totalCandidates =
        candidates.length;

    return (

        <div
            className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
            "
        >

            {/* Header */}

            <div
                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <div
                        className="
                            mb-2
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            px-3
                            py-1
                            text-xs
                            text-cyan-300
                        "
                    >
                        <TrendingUp
                            className="
                                h-3
                                w-3
                            "
                        />
                        Talent Insights
                    </div>

                    <h2
                        className="
                            text-2xl
                            font-black
                        "
                    >
                        Skill Distribution
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-gray-400
                        "
                    >
                        Most common matched skills
                        across candidates
                    </p>

                </div>

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-cyan-500/10
                        text-cyan-400
                    "
                >
                    <BarChart3
                        className="
                            h-6
                            w-6
                        "
                    />
                </div>

            </div>

            {/* Stats */}

            <div
                className="
                    mb-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    p-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span className="text-gray-400">
                        Unique Skills
                    </span>

                    <span
                        className="
                            text-xl
                            font-bold
                            text-cyan-400
                        "
                    >
                        {Object.keys(skillMap).length}
                    </span>

                </div>

            </div>

            {/* Skills */}

            {skills.length > 0 ? (

                <div
                    className="
                        max-h-[550px]
                        space-y-4
                        overflow-y-auto
                        pr-2
                    "
                >

                    {skills.map(
                        (
                            [skill, count],
                            index
                        ) => {

                            const percentage =
                                (
                                    count /
                                    totalCandidates
                                ) * 100;

                            return (

                                <div
                                    key={skill}
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        p-4
                                    "
                                >

                                    <div
                                        className="
                                            mb-3
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-violet-500/10
                                                    text-sm
                                                    font-bold
                                                    text-violet-300
                                                "
                                            >
                                                #{index + 1}
                                            </div>

                                            <span
                                                className="
                                                    font-medium
                                                "
                                            >
                                                {skill}
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                text-right
                                            "
                                        >

                                            <div
                                                className="
                                                    font-bold
                                                    text-cyan-400
                                                "
                                            >
                                                {count}
                                            </div>

                                            <div
                                                className="
                                                    text-xs
                                                    text-gray-500
                                                "
                                            >
                                                candidates
                                            </div>

                                        </div>

                                    </div>

                                    <div
                                        className="
                                            h-3
                                            overflow-hidden
                                            rounded-full
                                            bg-white/10
                                        "
                                    >

                                        <div
                                            className="
                                                h-full
                                                rounded-full
                                                bg-gradient-to-r
                                                from-violet-500
                                                via-cyan-500
                                                to-cyan-400
                                            "
                                            style={{
                                                width: `${percentage}%`,
                                            }}
                                        />

                                    </div>

                                    <div
                                        className="
                                            mt-2
                                            text-right
                                            text-xs
                                            text-gray-400
                                        "
                                    >
                                        {percentage.toFixed(0)}%
                                        candidate coverage
                                    </div>

                                </div>

                            );

                        }
                    )}

                </div>

            ) : (

                <div
                    className="
                        flex
                        h-[250px]
                        items-center
                        justify-center
                        rounded-3xl
                        border
                        border-dashed
                        border-white/10
                        text-center
                        text-gray-500
                    "
                >
                    No skill data available
                </div>

            )}

        </div>

    );

}