"use client";

import { useState } from "react";

import { compareResumes }
    from "@/services/compareApi";

import ComparisonResult
    from "@/components/compare/ComparisonResult";

export default function ComparePage() {

    const [fileA, setFileA] =
        useState(null);

    const [fileB, setFileB] =
        useState(null);

    const [jobDescription,
        setJobDescription] =
        useState("");

    const [result,
        setResult] =
        useState(null);

    const [loading,
        setLoading] =
        useState(false);

    const handleCompare =
        async () => {

            if (
                !fileA ||
                !fileB ||
                !jobDescription
            ) {
                alert(
                    "Upload both resumes and enter JD"
                );
                return;
            }

            try {

                setLoading(true);

                const data =
                    await compareResumes(
                        fileA,
                        fileB,
                        jobDescription
                    );

                setResult(data);

            } catch (error) {

                console.error(error);

                alert(
                    "Comparison failed"
                );

            } finally {

                setLoading(false);

            }
        };

    return (
        <main className="min-h-screen bg-black text-white">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <h1 className="mb-12 text-center text-6xl font-bold">
                    Resume Comparison
                </h1>

                <div className="grid gap-8 lg:grid-cols-2">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                        <h2 className="mb-4 text-2xl font-bold">
                            Resume A
                        </h2>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setFileA(
                                    e.target.files[0]
                                )
                            }
                        />

                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                        <h2 className="mb-4 text-2xl font-bold">
                            Resume B
                        </h2>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setFileB(
                                    e.target.files[0]
                                )
                            }
                        />

                    </div>

                </div>

                <div className="mt-8">

                    <textarea
                        rows={12}
                        value={jobDescription}
                        onChange={(e) =>
                            setJobDescription(
                                e.target.value
                            )
                        }
                        placeholder="Paste Job Description..."
                        className="
                        w-full
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        p-6
                        "
                    />

                </div>

                <div className="mt-8 text-center">

                    <button
                        onClick={
                            handleCompare
                        }
                        className="
                        rounded-xl
                        bg-violet-600
                        px-8
                        py-4
                        text-lg
                        font-bold
                        "
                    >
                        {loading
                            ? "Comparing..."
                            : "Compare Candidates"}
                    </button>

                </div>

                <ComparisonResult
                    result={result}
                />

            </div>

        </main>
    );
}