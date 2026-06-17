"use client";

import {
    ArrowRight,
    Loader2,
    Sparkles,
} from "lucide-react";

export default function AnalyzeButton({
    loading,
    onClick,
}) {

    return (

        <button
            onClick={onClick}
            disabled={loading}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-violet-500/20
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-[0_0_40px_rgba(124,58,237,0.35)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]
                disabled:cursor-not-allowed
                disabled:opacity-70
            "
        >

            {/* Shine Effect */}

            <div
                className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                "
            />

            <div
                className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    gap-3
                "
            >

                {loading ? (
                    <>
                        <Loader2
                            className="
                                h-5
                                w-5
                                animate-spin
                            "
                        />

                        Generating AI Insights...
                    </>
                ) : (
                    <>
                        <Sparkles
                            className="
                                h-5
                                w-5
                            "
                        />

                        Analyze Resume

                        <ArrowRight
                            className="
                                h-5
                                w-5
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </>
                )}

            </div>

        </button>

    );

}