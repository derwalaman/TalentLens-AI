"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Menu,
    X,
    Sparkles,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Navbar() {

    const [open, setOpen] =
        useState(false);

    const navItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Matcher",
            href: "/matcher",
        },
        {
            label: "Compare",
            href: "/compare",
        },
        {
            label: "Ranking",
            href: "/ranking",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
    ];

    return (

        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-white/10
                bg-black/60
                backdrop-blur-2xl
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    max-w-[1400px]
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >

                {/* Logo */}

                <Link
                    href="/"
                    className="flex items-center gap-4"
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
                            shadow-violet-500/30
                        "
                    >
                        <Sparkles
                            className="h-5 w-5 text-white"
                        />
                    </div>

                    <div>

                        <h2
                            className="
                                text-xl
                                font-bold
                                tracking-tight
                                text-white
                            "
                        >
                            TalentLens AI
                        </h2>

                        <p
                            className="
                                text-xs
                                text-gray-500
                            "
                        >
                            Recruitment Intelligence
                        </p>

                    </div>

                </Link>

                {/* Desktop Nav */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-10
                        md:flex
                    "
                >

                    {
                        navItems.map(
                            (item) => (

                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        text-[15px]
                                        font-medium
                                        tracking-wide
                                        text-gray-400
                                        transition-all
                                        duration-300
                                        hover:text-violet-400
                                    "
                                >
                                    {item.label}
                                </Link>

                            )
                        )
                    }

                </nav>

                {/* CTA */}

                <div
                    className="
                        hidden
                        md:flex
                    "
                >

                    <Link href="/matcher">

                        <Button
                            className="
                                rounded-xl
                                bg-gradient-to-r
                                from-violet-600
                                to-fuchsia-600
                                px-6
                                text-white
                                shadow-lg
                                shadow-violet-500/20
                                transition-all
                                duration-300
                                hover:scale-105
                            "
                        >

                            Try TalentLens

                            <ArrowRight
                                className="
                                    ml-2
                                    h-4
                                    w-4
                                "
                            />

                        </Button>

                    </Link>

                </div>

                {/* Mobile Toggle */}

                <button
                    onClick={() =>
                        setOpen(!open)
                    }
                    className="md:hidden"
                >

                    {
                        open
                            ? <X />
                            : <Menu />
                    }

                </button>

            </div>

            {/* Mobile Menu */}

            {
                open && (

                    <div
                        className="
                            border-t
                            border-white/10
                            bg-black/95
                            backdrop-blur-xl
                            md:hidden
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-5
                                p-6
                            "
                        >

                            {
                                navItems.map(
                                    (item) => (

                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() =>
                                                setOpen(false)
                                            }
                                            className="
                                                text-gray-300
                                                transition
                                                hover:text-violet-400
                                            "
                                        >
                                            {item.label}
                                        </Link>

                                    )
                                )
                            }

                            <Link
                                href="/matcher"
                                onClick={() =>
                                    setOpen(false)
                                }
                            >

                                <Button
                                    className="
                                        mt-3
                                        w-full
                                        bg-gradient-to-r
                                        from-violet-600
                                        to-fuchsia-600
                                    "
                                >
                                    Try TalentLens
                                </Button>

                            </Link>

                        </div>

                    </div>

                )
            }

        </header>

    );
}