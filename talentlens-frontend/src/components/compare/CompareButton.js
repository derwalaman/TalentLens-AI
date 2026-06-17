"use client";

import {
    GitCompareArrows,
    Loader2,
} from "lucide-react";

export default function CompareButton({
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
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                px-10
                py-5
                text-lg
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
                disabled:cursor-not-allowed
                disabled:opacity-60
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-white/10
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                "
            />

            <div
                className="
                    relative
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
                        Comparing Candidates...
                    </>

                ) : (

                    <>
                        <GitCompareArrows
                            className="
                                h-5
                                w-5
                            "
                        />
                        Compare Candidates
                    </>

                )}

            </div>

        </button>

    );

}