"use client";

export default function SkillHeatmap({
    heatmap,
}) {

    if (!heatmap?.length)
        return null;

    return (
        <div
            className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            p-6
            "
        >

            <h3
                className="
                mb-6
                text-2xl
                font-bold
                text-cyan-400
                "
            >
                Resume vs JD Heatmap
            </h3>

            <div className="space-y-4">

                {heatmap.map(
                    (item) => (

                        <div
                            key={item.skill}
                        >

                            <div
                                className="
                                mb-2
                                flex
                                justify-between
                                "
                            >

                                <span>
                                    {item.skill}
                                </span>

                                <span>

                                    {item.matched
                                        ? "✅"
                                        : "❌"}

                                </span>

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
                                    className={`h-full rounded-full ${item.matched
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                    style={{
                                        width:
                                            item.matched
                                                ? "100%"
                                                : "25%",
                                    }}
                                />

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}