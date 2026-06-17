"use client";

import { useState } from "react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import ResumeUploader from "@/components/matcher/ResumeUploader";
import JobDescriptionInput from "@/components/matcher/JobDescriptionInput";
import AnalyzeButton from "@/components/matcher/AnalyzeButton";
import ResultsCard from "@/components/matcher/ResultsCard";
import InsightsCard from "@/components/matcher/InsightsCard";

import { Brain, Sparkles, FileSearch } from "lucide-react";

import { analyzeResume } from "@/services/api";

export default function MatcherPage() {
    const [resumeFile, setResumeFile] = useState(null);

    const [jobDescription, setJobDescription] =
        useState("");

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!resumeFile || !jobDescription) {
            toast.error(
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
            toast.error("Analysis failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">

            <Navbar />

            {/* Background Glow */}

            <div
                className="
                    fixed
                    inset-0
                    -z-10
                    bg-[radial-gradient(circle_at_top_left,#7c3aed22,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d422,transparent_35%)]
                "
            />

            <section className="relative px-6 pt-20 pb-20">

                <div className="mx-auto max-w-7xl">

                    {/* Hero */}

                    <div className="text-center">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-violet-500/30
                                bg-violet-500/10
                                px-4
                                py-2
                                text-sm
                                text-violet-300
                            "
                        >
                            <Brain className="h-4 w-4" />
                            AI Resume Intelligence
                        </div>

                        <h1
                            className="
                                mt-8
                                text-5xl
                                font-black
                                leading-tight
                                md:text-7xl
                            "
                        >
                            Match Talent With
                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-violet-400
                                    via-fuchsia-400
                                    to-cyan-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                AI Precision
                            </span>
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-8
                                max-w-3xl
                                text-lg
                                leading-8
                                text-gray-400
                            "
                        >
                            Upload a resume, paste a job description,
                            and let TalentLens analyze candidate fit
                            using semantic matching, ATS scoring,
                            skill-gap detection and recruiter-ready
                            recommendations.
                        </p>

                        {/* Stats */}

                        <div
                            className="
                                mx-auto
                                mt-12
                                grid
                                max-w-3xl
                                grid-cols-3
                                gap-6
                            "
                        >

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-5
                                "
                            >
                                <h3 className="text-3xl font-bold text-violet-400">
                                    AI
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Resume Parsing
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-5
                                "
                            >
                                <h3 className="text-3xl font-bold text-cyan-400">
                                    ATS
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Scoring Engine
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-5
                                "
                            >
                                <h3 className="text-3xl font-bold text-emerald-400">
                                    FAISS
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Semantic Search
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Upload Section */}

                    <div
                        className="
                            mt-20
                            grid
                            gap-8
                            lg:grid-cols-2
                        "
                    >

                        <ResumeUploader
                            file={resumeFile}
                            setFile={setResumeFile}
                        />

                        <JobDescriptionInput
                            jobDescription={jobDescription}
                            setJobDescription={
                                setJobDescription
                            }
                        />

                    </div>

                    {/* Analyze */}

                    <div className="mt-12 text-center">

                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-sm
                                text-gray-500
                            "
                        >
                            <Sparkles className="h-4 w-4" />
                            Powered by Gemini + FAISS
                        </div>

                        <AnalyzeButton
                            loading={loading}
                            onClick={handleAnalyze}
                        />

                    </div>

                    {/* Loading */}

                    {loading && (

                        <div
                            className="
                                mt-16
                                rounded-3xl
                                border
                                border-violet-500/20
                                bg-violet-500/10
                                p-10
                                text-center
                            "
                        >

                            <FileSearch
                                className="
                                    mx-auto
                                    mb-4
                                    h-12
                                    w-12
                                    animate-pulse
                                    text-violet-400
                                "
                            />

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                Generating AI Insights
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-gray-400
                                "
                            >
                                Parsing resume, analyzing
                                skills, generating recruiter
                                recommendations and semantic
                                similarity scores...
                            </p>

                        </div>

                    )}

                    {/* Results */}

                    {result && (
                        <div
                            id="results"
                            className="mt-20"
                        >
                            <ResultsCard
                                result={result}
                            />

                            <InsightsCard
                                result={result}
                            />
                        </div>
                    )}

                </div>

            </section>

            <Footer />

        </main>
    );
}