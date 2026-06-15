export default function RankingJobDescription({
    value,
    setValue,
}) {

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="mb-4 text-2xl font-bold">

                Job Description

            </h2>

            <textarea
                value={value}
                onChange={(e) =>
                    setValue(
                        e.target.value
                    )
                }
                rows={14}
                placeholder="Paste JD..."
                className="w-full rounded-2xl bg-black/30 p-4 outline-none"
            />

        </div>
    );
}