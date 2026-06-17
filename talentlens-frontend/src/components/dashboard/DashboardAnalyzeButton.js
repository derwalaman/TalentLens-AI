"use client";

import {
    Sparkles,
    Loader2,
    ArrowRight,
} from "lucide-react";

export default function DashboardAnalyzeButton({
    loading,
    onClick,
    disabled,
}) {

    return (

        <div
            className="
                mt-12
                flex
                justify-center
            "
        >

            <button
                onClick={onClick}
                disabled={
                    loading ||
                    disabled
                }
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-violet-500/20
                    bg-gradient-to-r
                    from-violet-600
                    via-purple-600
                    to-cyan-600
                    px-10
                    py-5
                    text-lg
                    font-bold
                    text-white
                    shadow-[0_0_40px_rgba(139,92,246,0.25)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >

                {/* Glow */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/10
                        via-transparent
                        to-white/10
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                />

                <div
                    className="
                        relative
                        flex
                        items-center
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

                            Ranking Candidates...
                        </>

                    ) : (

                        <>
                            <Sparkles
                                className="
                                    h-5
                                    w-5
                                "
                            />

                            Analyze & Rank Candidates

                            <ArrowRight
                                className="
                                    h-5
                                    w-5
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />
                        </>

                    )}

                </div>

            </button>

        </div>

    );

}