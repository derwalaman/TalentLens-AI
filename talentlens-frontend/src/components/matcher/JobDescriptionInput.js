"use client";

export default function JobDescriptionInput({
    jobDescription,
    setJobDescription,
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h2 className="mb-4 text-2xl font-semibold">
                Job Description
            </h2>

            <textarea
                value={jobDescription}
                onChange={(e) =>
                    setJobDescription(e.target.value)
                }
                placeholder="Paste job description here..."
                className="h-72 w-full rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-violet-500"
            />

            <div className="mt-3 text-right text-sm text-gray-500">
                {jobDescription.length} characters
            </div>

        </div>
    );
}