export default function InsightsCard({
    result,
}) {
    if (!result) return null;

    return (
        <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 h-[420px]
overflow-y-auto">
                <h3 className="mb-4 text-xl font-bold text-blue-400">
                    Education
                </h3>

                {result.education?.map(
                    (item, index) => (
                        <p
                            key={index}
                            className="mb-2 text-gray-300"
                        >
                            • {item}
                        </p>
                    )
                )}
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 h-[420px]
overflow-y-auto">
                <h3 className="mb-4 text-xl font-bold text-green-400">
                    Projects
                </h3>

                {result.projects?.map(
                    (item, index) => (
                        <p
                            key={index}
                            className="mb-2 text-gray-300"
                        >
                            • {item}
                        </p>
                    )
                )}
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6 h-[420px]
overflow-y-auto">
                <h3 className="mb-4 text-xl font-bold text-violet-400">
                    Experience
                </h3>

                {result.experience?.map(
                    (item, index) => (
                        <p
                            key={index}
                            className="mb-2 text-gray-300"
                        >
                            • {item}
                        </p>
                    )
                )}
            </div>

        </div>
    );
}