"use client";

import Link from "next/link";

import {
    Sparkles,
    Globe,
    Mail,
    ArrowUpRight,
} from "lucide-react";

export default function Footer() {

    const productLinks = [
        {
            label: "Resume Matcher",
            href: "/matcher",
        },
        {
            label: "Candidate Compare",
            href: "/compare",
        },
        {
            label: "Resume Ranking",
            href: "/ranking",
        },
        {
            label: "Recruiter Dashboard",
            href: "/dashboard",
        },
    ];

    return (

        <footer
            className="
            relative
            overflow-hidden
        "
        >

            {/* Background Glow */}

            <div
                className="
                absolute
                left-0
                top-0
                h-[400px]
                w-[400px]
                rounded-full
                bg-violet-600/10
                blur-[180px]
            "
            />

            <div
                className="
                absolute
                right-0
                bottom-0
                h-[350px]
                w-[350px]
                rounded-full
                bg-cyan-600/10
                blur-[160px]
            "
            />

            <div
                className="
                relative
                z-10
                mx-auto
                max-w-7xl
                px-6
                py-14
            "
            >

                <div
                    className="
                    grid
                    gap-12
                    lg:grid-cols-[1.8fr_1fr_1fr_1fr]
                "
                >

                    {/* Brand */}

                    <div>

                        <div
                            className="
                            flex
                            items-center
                            gap-4
                        "
                        >

                            <div
                                className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-gradient-to-r
                                from-violet-600
                                via-fuchsia-500
                                to-cyan-500
                                shadow-lg
                                shadow-violet-500/20
                            "
                            >

                                <Sparkles
                                    className="
                                    h-5
                                    w-5
                                    text-white
                                "
                                />

                            </div>

                            <div>

                                <h3
                                    className="
                                    text-xl
                                    font-bold
                                    text-white
                                "
                                >
                                    TalentLens AI
                                </h3>

                                <p
                                    className="
                                    text-sm
                                    text-gray-500
                                "
                                >
                                    Recruitment Intelligence Platform
                                </p>

                            </div>

                        </div>

                        <p
                            className="
                            mt-6
                            max-w-md
                            text-sm
                            leading-7
                            text-gray-400
                        "
                        >
                            AI-powered hiring platform for resume
                            analysis, semantic matching, candidate
                            ranking, recruiter insights and talent
                            intelligence.
                        </p>

                        {/* Tech Badges */}

                        <div
                            className="
                            mt-6
                            flex
                            flex-wrap
                            gap-2
                        "
                        >

                            <span
                                className="
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
                                Gemini AI
                            </span>

                            <span
                                className="
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
                                FastAPI
                            </span>

                            <span
                                className="
                                rounded-full
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                px-3
                                py-1
                                text-xs
                                text-emerald-300
                            "
                            >
                                FAISS
                            </span>

                            <span
                                className="
                                rounded-full
                                border
                                border-orange-500/20
                                bg-orange-500/10
                                px-3
                                py-1
                                text-xs
                                text-orange-300
                            "
                            >
                                Vector Search
                            </span>

                        </div>

                    </div>

                    {/* Product */}

                    <div>

                        <h4
                            className="
                            mb-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-gray-300
                        "
                        >
                            Product
                        </h4>

                        <div
                            className="
                            flex
                            flex-col
                            gap-4
                        "
                        >

                            {productLinks.map(
                                (item) => (

                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="
                                        flex
                                        items-center
                                        gap-2
                                        text-gray-400
                                        transition
                                        hover:text-white
                                    "
                                    >
                                        {item.label}

                                        <ArrowUpRight
                                            className="
                                            h-3
                                            w-3
                                        "
                                        />
                                    </Link>

                                )
                            )}

                        </div>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h4
                            className="
                            mb-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-gray-300
                        "
                        >
                            Navigation
                        </h4>

                        <div
                            className="
                            flex
                            flex-col
                            gap-4
                        "
                        >

                            <Link
                                href="/"
                                className="
                                text-gray-400
                                hover:text-white
                            "
                            >
                                Home
                            </Link>

                            <Link
                                href="/matcher"
                                className="
                                text-gray-400
                                hover:text-white
                            "
                            >
                                Get Started
                            </Link>

                            <Link
                                href="/dashboard"
                                className="
                                text-gray-400
                                hover:text-white
                            "
                            >
                                Recruiter Dashboard
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h4
                            className="
                            mb-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-gray-300
                        "
                        >
                            Connect
                        </h4>

                        <div
                            className="
                            flex
                            gap-4
                        "
                        >

                            <button
                                className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                transition-all
                                hover:border-violet-500/40
                                hover:bg-violet-500/10
                            "
                            >
                                <Globe />
                            </button>

                            <button
                                className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                transition-all
                                hover:border-cyan-500/40
                                hover:bg-cyan-500/10
                            "
                            >
                                <Mail />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div
                    className="
                    mt-12
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-white/10
                    pt-8
                    text-sm
                    text-gray-500
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
                >

                    <p>
                        © 2026 TalentLens AI
                    </p>

                    <p>
                        Built with Gemini AI · FastAPI · FAISS ·
                        Sentence Transformers
                    </p>

                </div>

            </div>

        </footer>

    );

}
