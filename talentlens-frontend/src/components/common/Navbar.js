"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-violet-500" />
                    <span className="text-xl font-bold text-white">
                        {SITE_CONFIG.name}
                    </span>
                </Link>

                {/* Nav Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#features"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Features
                    </Link>

                    <Link
                        href="#how-it-works"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        How It Works
                    </Link>

                    <Link
                        href="#contact"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Contact
                    </Link>
                </div>

                {/* CTA */}
                <Button className="bg-violet-600 hover:bg-violet-700">
                    Analyze Resume
                </Button>
            </div>
        </nav>
    );
}