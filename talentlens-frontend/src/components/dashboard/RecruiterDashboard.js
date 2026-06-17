"use client";

import { useState } from "react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import DashboardHero from "./DashboardHero";
import MultiResumeUploader from "./MultiResumeUploader";
import JobDescriptionInput from "./JobDescriptionInput";
import DashboardAnalyzeButton from "./DashboardAnalyzeButton";

import DashboardStats from "./DashboardStats";
import CandidateLeaderboard from "./CandidateLeaderboard";
import SkillDistribution from "./SkillDistribution";

import { rankCandidates } from "@/services/dashboardApi";

export default function RecruiterDashboard() {

    const [files, setFiles] =
        useState([]);

    const [jobDescription,
        setJobDescription] =
        useState("");

    const [candidates,
        setCandidates] =
        useState([]);

    const [loading,
        setLoading] =
        useState(false);

    const handleRank =
        async () => {

            if (
                files.length === 0 ||
                !jobDescription.trim()
            ) {
                toast.error(
                    "Upload resumes and enter a job description."
                );
                return;
            }

            try {

                setLoading(true);

                const data =
                    await rankCandidates(
                        files,
                        jobDescription
                    );

                setCandidates(
                    data.ranked_candidates || []
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    "Failed to rank candidates."
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
                    min-h-screen
                    bg-black
                    text-white
                    pt-28
                "
            >

                {/* Background Effects */}

                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        -z-10
                        overflow-hidden
                    "
                >

                    <div
                        className="
                            absolute
                            left-0
                            top-0
                            h-[500px]
                            w-[500px]
                            rounded-full
                            bg-violet-600/10
                            blur-[140px]
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-0
                            right-0
                            h-[500px]
                            w-[500px]
                            rounded-full
                            bg-cyan-500/10
                            blur-[140px]
                        "
                    />

                </div>

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-6
                        pb-20
                    "
                >

                    {/* Hero */}

                    <DashboardHero />

                    {/* Upload + JD */}

                    <div
                        className="
                            mt-12
                            grid
                            gap-8
                            lg:grid-cols-2
                        "
                    >

                        <MultiResumeUploader
                            files={files}
                            setFiles={setFiles}
                        />

                        <JobDescriptionInput
                            value={jobDescription}
                            setValue={
                                setJobDescription
                            }
                        />

                    </div>

                    {/* Rank Button */}

                    <DashboardAnalyzeButton
                        loading={loading}
                        filesCount={
                            files.length
                        }
                        onClick={
                            handleRank
                        }
                    />

                    {/* Empty State */}

                    {!candidates.length && (

                        <div
                            className="
                                mt-14
                                grid
                                gap-6
                                md:grid-cols-4
                            "
                        >

                            <div
                                className="
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                "
                            >
                                <p className="text-gray-400">
                                    Uploaded Resumes
                                </p>

                                <h2
                                    className="
                                        mt-3
                                        text-5xl
                                        font-black
                                    "
                                >
                                    {files.length}
                                </h2>

                            </div>

                            <div
                                className="
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                "
                            >
                                <p className="text-gray-400">
                                    Ranked
                                </p>

                                <h2
                                    className="
                                        mt-3
                                        text-5xl
                                        font-black
                                    "
                                >
                                    0
                                </h2>

                            </div>

                            <div
                                className="
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                "
                            >
                                <p className="text-gray-400">
                                    Top Score
                                </p>

                                <h2
                                    className="
                                        mt-3
                                        text-5xl
                                        font-black
                                    "
                                >
                                    —
                                </h2>

                            </div>

                            <div
                                className="
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                "
                            >
                                <p className="text-gray-400">
                                    Recommended
                                </p>

                                <h2
                                    className="
                                        mt-3
                                        text-5xl
                                        font-black
                                    "
                                >
                                    —
                                </h2>

                            </div>

                        </div>

                    )}

                    {/* Results */}

                    {candidates.length > 0 && (

                        <>

                            <div className="mt-16">

                                <DashboardStats
                                    candidates={
                                        candidates
                                    }
                                />

                            </div>

                            <div
                                className="
                                    mt-10
                                    grid
                                    gap-8
                                    xl:grid-cols-3
                                "
                            >

                                {/* Left */}

                                <div
                                    className="
                                        xl:col-span-2
                                    "
                                >

                                    <CandidateLeaderboard
                                        candidates={
                                            candidates
                                        }
                                    />

                                </div>

                                {/* Right */}

                                <div>

                                    <SkillDistribution
                                        candidates={
                                            candidates
                                        }
                                    />

                                </div>

                            </div>

                        </>

                    )}

                </div>

            </main>

            <Footer />
        </>

    );
}