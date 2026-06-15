"use client";

import { useState } from "react";

import ResumeUploader from "@/components/matcher/ResumeUploader";
// import ResumePreview from "@/components/matcher/ResumePreview";
import JobDescriptionInput from "@/components/matcher/JobDescriptionInput";
import AnalyzeButton from "@/components/matcher/AnalyzeButton";
import ResultsCard from "@/components/matcher/ResultsCard";
import InsightsCard from "@/components/matcher/InsightsCard";

import { analyzeResume } from "@/services/api";

export default function MatcherPage() {
    const [resumeFile, setResumeFile] = useState(null);

    const [jobDescription, setJobDescription] =
        useState("");

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!resumeFile || !jobDescription) {
            alert(
                "Please upload a resume and enter a job description."
            );
            return;
        }

        try {
            setLoading(true);

            const data = await analyzeResume(
                resumeFile,
                jobDescription
            );

            setResult(data);

            setTimeout(() => {
                document
                    .getElementById("results")
                    ?.scrollIntoView({
                        behavior: "smooth",
                    });
            }, 300);

        } catch (error) {
            console.error(error);
            alert("Analysis failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed22,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d422,transparent_35%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                {/* Hero */}
                <div className="mb-16 text-center">

                    <div className="mb-4 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                        AI Resume Intelligence
                    </div>

                    <h1 className="text-5xl font-bold md:text-7xl">
                        Resume Matcher
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
                        Upload a resume, paste a job description,
                        and let AI evaluate candidate fit using
                        semantic embeddings, skill-gap analysis,
                        and intelligent recommendations.
                    </p>
                </div>

                {/* Upload + JD */}
                <div className="grid gap-8 lg:grid-cols-2">

                    <ResumeUploader
                        file={resumeFile}
                        setFile={setResumeFile}
                    />

                    <JobDescriptionInput
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                    />

                </div>

                {/* Resume Preview */}
                {/* <ResumePreview
                    file={resumeFile}
                /> */}

                {/* Analyze Button */}
                <div className="mt-10 flex justify-center">

                    <AnalyzeButton
                        loading={loading}
                        onClick={handleAnalyze}
                    />

                </div>

                {/* Results */}
                {result && (
                    <div
                        id="results"
                        className="mt-16"
                    >
                        <ResultsCard
                            result={result}
                        />
                        <InsightsCard result={result} />
                    </div>
                )}

            </div>

        </main>
    );
}