"use client";

import {
    Trophy,
    Loader2,
} from "lucide-react";

export default function RankCandidatesButton({
    loading,
    onClick,
    disabled,
}) {

    return (

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
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-cyan-500
                px-10
                py-4
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                disabled:cursor-not-allowed
                disabled:opacity-50
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white/0
                    via-white/10
                    to-white/0
                    opacity-0
                    transition
                    duration-500
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
                            size={20}
                            className="
                                animate-spin
                            "
                        />

                        Ranking Candidates...
                    </>

                ) : (

                    <>
                        <Trophy size={20} />

                        Rank Candidates
                    </>

                )}

            </div>

        </button>

    );

}