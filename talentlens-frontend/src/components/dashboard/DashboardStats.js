"use client";

import {
    Users,
    Trophy,
    TrendingUp,
    CheckCircle2,
} from "lucide-react";

export default function DashboardStats({
    candidates,
}) {

    if (!candidates?.length) {
        return null;
    }

    const total =
        candidates.length;

    const topScore =
        Math.max(
            ...candidates.map(
                (candidate) =>
                    candidate.final_score || 0
            )
        );

    const average =
        Math.round(
            candidates.reduce(
                (acc, candidate) =>
                    acc +
                    (candidate.final_score || 0),
                0
            ) / total
        );

    const recommended =
        candidates.filter(
            (candidate) =>
                candidate.final_score >= 70
        ).length;

    const stats = [

        {
            title:
                "Candidate Pool",

            value:
                total,

            icon:
                Users,

            color:
                "text-cyan-400",

            bg:
                "bg-cyan-500/10",

            border:
                "border-cyan-500/20",
        },

        {
            title:
                "Highest Match",

            value:
                `${topScore}%`,

            icon:
                Trophy,

            color:
                "text-yellow-400",

            bg:
                "bg-yellow-500/10",

            border:
                "border-yellow-500/20",
        },

        {
            title:
                "Average Match",

            value:
                `${average}%`,

            icon:
                TrendingUp,

            color:
                "text-violet-400",

            bg:
                "bg-violet-500/10",

            border:
                "border-violet-500/20",
        },

        {
            title:
                "Ready To Hire",

            value:
                recommended,

            icon:
                CheckCircle2,

            color:
                "text-green-400",

            bg:
                "bg-green-500/10",

            border:
                "border-green-500/20",
        },

    ];

    return (

        <section>

            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-3xl
                            font-black
                        "
                    >
                        Recruitment Analytics
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Real-time overview of
                        your candidate pipeline.
                    </p>

                </div>

            </div>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {stats.map(
                    (stat) => {

                        const Icon =
                            stat.icon;

                        return (

                            <div
                                key={stat.title}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[32px]
                                    border
                                    ${stat.border}
                                    ${stat.bg}
                                    p-7
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:scale-[1.02]
                                `}
                            >

                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-0
                                        h-28
                                        w-28
                                        rounded-full
                                        bg-white/5
                                        blur-3xl
                                    "
                                />

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                uppercase
                                                tracking-widest
                                                text-gray-400
                                            "
                                        >
                                            {stat.title}
                                        </p>

                                        <h3
                                            className="
                                                mt-4
                                                text-5xl
                                                font-black
                                            "
                                        >
                                            {stat.value}
                                        </h3>

                                    </div>

                                    <div
                                        className={`
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-black/20
                                            ${stat.color}
                                        `}
                                    >
                                        <Icon
                                            className="
                                                h-7
                                                w-7
                                            "
                                        />
                                    </div>

                                </div>

                                <div
                                    className="
                                        mt-6
                                        h-1
                                        overflow-hidden
                                        rounded-full
                                        bg-white/10
                                    "
                                >

                                    <div
                                        className={`
                                            h-full
                                            w-full
                                            ${stat.bg}
                                        `}
                                    />

                                </div>

                            </div>

                        );

                    }
                )}

            </div>

        </section>

    );

}