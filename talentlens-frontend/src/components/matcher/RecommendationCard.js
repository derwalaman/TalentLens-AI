"use client";

export default function RecommendationCard({
    result,
}) {
    if (!result) return null;

    const score = result.match_score;

    let recommendation = "";

    if (score >= 80) {
        recommendation =
            "Strong candidate. Highly recommended for interview.";
    }

    else if (score >= 60) {
        recommendation =
            "Candidate matches most requirements and should be shortlisted.";
    }

    else if (score >= 40) {
        recommendation =
            "Candidate shows potential but has notable skill gaps.";
    }

    else {
        recommendation =
            "Candidate is currently not a strong fit for this role.";
    }

    return (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

            <h3 className="mb-4 text-xl font-bold text-cyan-400">
                AI Recommendation
            </h3>

            <p className="leading-7 text-gray-300">
                {recommendation}
            </p>

        </div>
    );
}