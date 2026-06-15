"use client";

import { useState } from "react";

import RankingHero from "@/components/ranking/RankingHero";
import MultiResumeUploader from "@/components/ranking/MultiResumeUploader";
import RankingJobDescription from "@/components/ranking/RankingJobDescription";
import CandidateRankingTable from "@/components/ranking/CandidateRankingTable";

import { rankResumes } from "@/services/rankApi";

export default function RankingPage() {

    const [files, setFiles] = useState([]);

    const [jobDescription, setJobDescription] =
        useState("");

    const [results, setResults] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const handleRank = async () => {

        if (
            files.length === 0 ||
            !jobDescription
        ) {
            alert(
                "Upload resumes and enter a job description."
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
                data.ranked_candidates
            );

        } catch (error) {

            console.error(error);

            alert(
                "Ranking failed."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <main className="min-h-screen bg-black text-white">

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                <RankingHero />

                <div className="grid gap-8 lg:grid-cols-2">

                    <MultiResumeUploader
                        files={files}
                        setFiles={setFiles}
                    />

                    <RankingJobDescription
                        value={jobDescription}
                        setValue={
                            setJobDescription
                        }
                    />

                </div>

                <div className="mt-10 flex justify-center">

                    <button
                        onClick={handleRank}
                        disabled={loading}
                        className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
                    >
                        {loading
                            ? "Ranking..."
                            : "Rank Candidates"}
                    </button>

                </div>

                <CandidateRankingTable
                    candidates={results}
                />

            </div>

        </main>
    );
}