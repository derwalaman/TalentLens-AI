"use client";

import { useState } from "react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import RankingHero from "@/components/ranking/RankingHero";
import MultiResumeUploader from "@/components/ranking/MultiResumeUploader";
import RankingJobDescription from "@/components/ranking/RankingJobDescription";
import RankCandidatesButton from "@/components/ranking/RankCandidatesButton";

import CandidateLeaderboard from "@/components/ranking/CandidateLeaderboard";
import CandidateRankingTable from "@/components/ranking/CandidateRankingTable";

import { rankResumes } from "@/services/rankApi";

export default function RankingPage() {

    const [files, setFiles] =
        useState([]);

    const [jobDescription,
        setJobDescription] =
        useState("");

    const [results,
        setResults] =
        useState([]);

    const [loading,
        setLoading] =
        useState(false);

    const handleRank = async () => {

        if (
            files.length === 0 ||
            !jobDescription
        ) {
            toast.error(
                "Please upload resumes and provide a job description."
            );

            return;
        }

        try {

            setLoading(true);

            const data =
                await rankResumes(
                    files,
                    jobDescription
                );

            setResults(
                data.ranked_candidates || []
            );

            setTimeout(() => {

                document
                    .getElementById(
                        "ranking-results"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth",
                    });

            }, 300);

        } catch (error) {

            console.error(error);

            toast.error(
                "Ranking failed."
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
                    overflow-hidden
                    bg-black
                    text-white
                "
            >

                {/* Background Glow */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_left,#06b6d422,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed22,transparent_35%)]
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-6
                        py-20
                    "
                >

                    {/* Hero */}

                    <RankingHero />

                    {/* Upload + JD */}

                    <div
                        className="
                            grid
                            gap-8
                            lg:grid-cols-2
                        "
                    >

                        <MultiResumeUploader
                            files={files}
                            setFiles={setFiles}
                        />

                        <RankingJobDescription
                            value={
                                jobDescription
                            }
                            setValue={
                                setJobDescription
                            }
                        />

                    </div>

                    {/* Action Button */}

                    <div
                        className="
                            mt-12
                            flex
                            justify-center
                        "
                    >

                        <RankCandidatesButton
                            loading={loading}
                            onClick={
                                handleRank
                            }
                            disabled={
                                files.length ===
                                0 ||
                                !jobDescription
                            }
                        />

                    </div>

                    {/* Results */}

                    {results.length > 0 && (

                        <section
                            id="ranking-results"
                            className="mt-20"
                        >

                            {/* Top 3 Podium */}

                            <CandidateLeaderboard
                                candidates={
                                    results
                                }
                            />

                            {/* Full Rankings */}

                            <CandidateRankingTable
                                candidates={
                                    results
                                }
                            />

                        </section>

                    )}

                </div>

            </main>

            <Footer />
        </>

    );

}