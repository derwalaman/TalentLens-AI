"use client";

import { useState } from "react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import ResumeCompareUploader
    from "@/components/compare/ResumeCompareUploader";

import JobDescriptionCompare
    from "@/components/compare/JobDescriptionCompare";

import CompareButton
    from "@/components/compare/CompareButton";

import ComparisonResult
    from "@/components/compare/ComparisonResult";

import {
    GitCompareArrows,
    Sparkles,
} from "lucide-react";

import {
    compareResumes,
} from "@/services/compareApi";

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

                toast.error(
                    "Please upload both resumes and enter a job description."
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

                setTimeout(() => {

                    document
                        .getElementById(
                            "comparison-results"
                        )
                        ?.scrollIntoView({
                            behavior: "smooth",
                        });

                }, 300);

            } catch (error) {

                console.error(error);

                toast.error(
                    "Comparison failed"
                );

            } finally {

                setLoading(false);

            }

        };

    return (

        <>
            <Navbar />

            <main
                className="
                    relative
                    min-h-screen
                    overflow-hidden
                    bg-black
                    text-white
                "
            >

                {/* Background */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_left,#7c3aed22,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d422,transparent_35%)]
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-[1400px]
                        px-6
                        py-24
                    "
                >

                    {/* Hero */}

                    <section
                        className="
                            text-center
                        "
                    >

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-violet-500/20
                                bg-violet-500/10
                                px-5
                                py-2
                                text-sm
                                text-violet-300
                            "
                        >

                            <Sparkles
                                className="
                                    h-4
                                    w-4
                                "
                            />

                            AI Candidate Benchmarking

                        </div>

                        <h1
                            className="
                                mt-8
                                text-5xl
                                font-black
                                md:text-7xl
                            "
                        >
                            Resume Comparison
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-3xl
                                text-lg
                                leading-8
                                text-gray-400
                            "
                        >
                            Upload two resumes and compare
                            candidates side-by-side using
                            semantic matching, ATS scoring,
                            skill-gap analysis and recruiter
                            intelligence.
                        </p>

                    </section>

                    {/* Upload Section */}

                    <section
                        className="
                            mt-20
                        "
                    >

                        <div
                            className="
                                mb-8
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <GitCompareArrows
                                className="
                                    h-7
                                    w-7
                                    text-violet-400
                                "
                            />

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                "
                            >
                                Candidate Inputs
                            </h2>

                        </div>

                        <div
                            className="
                                grid
                                gap-8
                                xl:grid-cols-2
                            "
                        >

                            <div>

                                <div
                                    className="
                                        mb-4
                                        text-lg
                                        font-semibold
                                        text-emerald-400
                                    "
                                >
                                    Candidate A
                                </div>

                                <ResumeCompareUploader
                                    file={fileA}
                                    setFile={setFileA}
                                />

                            </div>

                            <div>

                                <div
                                    className="
                                        mb-4
                                        text-lg
                                        font-semibold
                                        text-cyan-400
                                    "
                                >
                                    Candidate B
                                </div>

                                <ResumeCompareUploader
                                    file={fileB}
                                    setFile={setFileB}
                                />

                            </div>

                        </div>

                    </section>

                    {/* JD */}

                    <section
                        className="
                            mt-10
                        "
                    >

                        <JobDescriptionCompare
                            jobDescription={
                                jobDescription
                            }
                            setJobDescription={
                                setJobDescription
                            }
                        />

                    </section>

                    {/* Compare Button */}

                    <div
                        className="
                            mt-12
                            flex
                            justify-center
                        "
                    >

                        <CompareButton
                            loading={loading}
                            onClick={
                                handleCompare
                            }
                        />

                    </div>

                    {/* Results */}

                    {
                        result && (

                            <div
                                id="comparison-results"
                                className="mt-20"
                            >

                                <ComparisonResult
                                    result={result}
                                />

                            </div>

                        )
                    }

                </div>

            </main>

            <Footer />
        </>

    );

}