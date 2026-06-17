"use client";

import {
    GraduationCap,
    Briefcase,
    FolderKanban,
} from "lucide-react";

export default function InsightsCard({
    result,
}) {

    if (!result) return null;

    const cards = [
        {
            title: "Education",
            subtitle: "Academic Background",
            icon: GraduationCap,
            color: "blue",
            data: result.education,
        },
        {
            title: "Projects",
            subtitle: "Portfolio Highlights",
            icon: FolderKanban,
            color: "green",
            data: result.projects,
        },
        {
            title: "Experience",
            subtitle: "Professional History",
            icon: Briefcase,
            color: "violet",
            data: result.experience,
        },
    ];

    const colors = {
        blue: {
            border: "border-blue-500/20",
            bg: "from-blue-500/10",
            icon: "bg-blue-500/20 text-blue-400",
        },
        green: {
            border: "border-green-500/20",
            bg: "from-green-500/10",
            icon: "bg-green-500/20 text-green-400",
        },
        violet: {
            border: "border-violet-500/20",
            bg: "from-violet-500/10",
            icon: "bg-violet-500/20 text-violet-400",
        },
    };

    const formatKey = (key) => {
        return key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );
    };

    const renderValue = (value) => {

        if (
            value === null ||
            value === undefined
        ) {
            return (
                <span className="text-gray-500">
                    N/A
                </span>
            );
        }

        if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            return (
                <span className="text-gray-300">
                    {String(value)}
                </span>
            );
        }

        if (Array.isArray(value)) {

            return (

                <div className="flex flex-wrap gap-2">

                    {value.map(
                        (
                            item,
                            index
                        ) => (

                            <span
                                key={index}
                                className="
                                    rounded-full
                                    bg-white/10
                                    px-3
                                    py-1
                                    text-xs
                                    text-gray-300
                                "
                            >
                                {
                                    typeof item ===
                                        "object"
                                        ? JSON.stringify(
                                            item
                                        )
                                        : String(
                                            item
                                        )
                                }
                            </span>

                        )
                    )}

                </div>

            );
        }

        if (
            typeof value === "object"
        ) {

            return (

                <div className="space-y-2">

                    {Object.entries(
                        value
                    ).map(
                        ([
                            key,
                            val,
                        ]) => (

                            <div
                                key={key}
                                className="
                                    rounded-xl
                                    bg-black/20
                                    p-3
                                "
                            >

                                <p
                                    className="
                                        mb-1
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-gray-500
                                    "
                                >
                                    {formatKey(
                                        key
                                    )}
                                </p>

                                {renderValue(
                                    val
                                )}

                            </div>

                        )
                    )}

                </div>

            );
        }

        return (
            <span className="text-gray-400">
                Unsupported Data
            </span>
        );
    };

    const renderItem = (
        item
    ) => {

        // Regex fallback

        if (
            typeof item === "string"
        ) {

            return (
                <p className="text-gray-300">
                    {item}
                </p>
            );
        }

        // Gemini object

        if (
            typeof item === "object" &&
            item !== null
        ) {

            return (

                <div className="space-y-3">

                    {Object.entries(
                        item
                    ).map(
                        ([
                            key,
                            value,
                        ]) => (

                            <div
                                key={key}
                            >

                                <p
                                    className="
                                        mb-1
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-gray-500
                                    "
                                >
                                    {formatKey(
                                        key
                                    )}
                                </p>

                                {renderValue(
                                    value
                                )}

                            </div>

                        )
                    )}

                </div>

            );
        }

        return (
            <p className="text-gray-500">
                Invalid Data
            </p>
        );
    };

    return (

        <section className="mt-12">

            <div className="mb-10 text-center">

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
                    Candidate Profile
                </span>

                <h2
                    className="
                        mt-5
                        text-3xl
                        font-black
                        md:text-5xl
                    "
                >
                    Education, Projects & Experience
                </h2>

                <p
                    className="
                        mt-4
                        text-gray-400
                    "
                >
                    Structured information extracted
                    from the resume.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-3
                "
            >

                {cards.map(
                    (card) => {

                        const Icon =
                            card.icon;

                        const theme =
                            colors[
                            card.color
                            ];

                        return (

                            <div
                                key={
                                    card.title
                                }
                                className={`
                                    group
                                    h-[520px]
                                    rounded-[32px]
                                    border
                                    ${theme.border}
                                    bg-gradient-to-b
                                    ${theme.bg}
                                    to-transparent
                                    p-6
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-white/20
                                `}
                            >

                                {/* Header */}

                                <div
                                    className="
                                        mb-6
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >

                                    <div
                                        className={`
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            ${theme.icon}
                                        `}
                                    >

                                        <Icon
                                            className="
                                                h-7
                                                w-7
                                            "
                                        />

                                    </div>

                                    <div>

                                        <h3
                                            className="
                                                text-xl
                                                font-bold
                                            "
                                        >
                                            {
                                                card.title
                                            }
                                        </h3>

                                        <p
                                            className="
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            {
                                                card.subtitle
                                            }
                                        </p>

                                    </div>

                                </div>

                                {/* Content */}

                                <div
                                    className="
                                        h-[400px]
                                        space-y-3
                                        overflow-y-auto
                                        pr-2
                                    "
                                >

                                    {card.data?.length >
                                        0 ? (

                                        card.data.map(
                                            (
                                                item,
                                                index
                                            ) => (

                                                <div
                                                    key={
                                                        index
                                                    }
                                                    className="
                                                        rounded-2xl
                                                        border
                                                        border-white/10
                                                        bg-white/[0.04]
                                                        p-4
                                                        transition
                                                        hover:bg-white/[0.08]
                                                    "
                                                >
                                                    {renderItem(
                                                        item
                                                    )}
                                                </div>

                                            )
                                        )

                                    ) : (

                                        <div
                                            className="
                                                flex
                                                h-full
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-dashed
                                                border-white/10
                                                text-center
                                                text-gray-500
                                            "
                                        >
                                            No data available
                                        </div>

                                    )}

                                </div>

                            </div>

                        );
                    }
                )}

            </div>

        </section>

    );

}