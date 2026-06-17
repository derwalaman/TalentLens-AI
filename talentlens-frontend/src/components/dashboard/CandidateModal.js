"use client";

export default function CandidateModal({
    candidate,
    open,
    onClose,
}) {

    if (!open || !candidate) {
        return null;
    }

    const score = candidate.final_score || 0;

    const recommendation =
        score >= 80
            ? "Strongly Recommended"
            : score >= 65
                ? "Recommended"
                : score >= 50
                    ? "Consider"
                    : "Not Recommended";

    const badgeColor =
        score >= 80
            ? "bg-emerald-500/20 text-emerald-400"
            : score >= 65
                ? "bg-cyan-500/20 text-cyan-400"
                : score >= 50
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400";

    const renderSummary = (summary) => {

        if (!summary) {
            return (
                <p className="text-gray-500">
                    No summary available
                </p>
            );
        }

        if (typeof summary === "string") {

            return (
                <p className="leading-relaxed text-gray-300">
                    {summary}
                </p>
            );
        }

        return (

            <div className="grid gap-4 md:grid-cols-2">

                {Object.entries(summary).map(
                    ([key, value]) => (

                        <div
                            key={key}
                            className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4
                        "
                        >

                            <p
                                className="
                                text-xs
                                uppercase
                                tracking-wider
                                text-gray-500
                            "
                            >
                                {key.replaceAll("_", " ")}
                            </p>

                            <div className="mt-2 text-gray-300">

                                {Array.isArray(value)
                                    ? value.join(", ")
                                    : typeof value ===
                                        "object"
                                        ? Object.entries(value)
                                            .map(
                                                ([k, v]) =>
                                                    `${k.replaceAll("_", " ")}: ${v}`
                                            )
                                            .join(" • ")
                                        : String(value)}

                            </div>

                        </div>

                    )
                )}

            </div>

        );
    };

    const renderFlexibleItem = (item) => {

        if (!item) return null;

        if (typeof item === "string") {

            return (
                <div
                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    text-gray-300
                "
                >
                    {item}
                </div>
            );
        }

        return (

            <div
                className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                p-4
            "
            >

                {Object.entries(item).map(
                    ([key, value]) => (

                        <div
                            key={key}
                            className="mb-2"
                        >

                            <span
                                className="
                                text-gray-500
                                capitalize
                            "
                            >
                                {key.replaceAll("_", " ")}
                                :
                            </span>

                            {" "}

                            {Array.isArray(value)
                                ? value.join(", ")
                                : String(value)}

                        </div>

                    )
                )}

            </div>

        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">

            <div className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 text-white">

                {/* Header */}

                <div className="flex items-start justify-between mb-8">

                    <div>

                        <h2 className="text-4xl font-bold">
                            Candidate Profile
                        </h2>

                        <p className="mt-2 text-gray-400">
                            ATS Resume Evaluation
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-xl bg-red-500 px-4 py-2 font-semibold hover:bg-red-600"
                    >
                        Close
                    </button>

                </div>

                {/* Recommendation Banner */}

                <div
                    className={`mb-8 rounded-2xl border border-white/10 p-6 ${badgeColor}`}
                >
                    <p className="text-sm uppercase tracking-wider">
                        Recruiter Decision
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                        {recommendation}
                    </h3>
                </div>

                {/* Candidate Summary */}

                {candidate.candidate_summary && (

                    <div
                        className="
            mb-10
            rounded-2xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            p-6
        "
                    >

                        <h3
                            className="
                mb-6
                text-2xl
                font-bold
                text-cyan-400
            "
                        >
                            AI Candidate Summary
                        </h3>

                        {renderSummary(
                            candidate.candidate_summary
                        )}

                    </div>

                )}

                {/* Scores */}

                <div className="mb-10 grid gap-4 md:grid-cols-3">

                    <div className="rounded-2xl bg-emerald-500/10 p-5">

                        <p className="text-gray-400">
                            ATS Score
                        </p>

                        <p className="mt-2 text-5xl font-bold text-emerald-400">
                            {candidate.final_score}%
                        </p>

                    </div>

                    <div className="rounded-2xl bg-cyan-500/10 p-5">

                        <p className="text-gray-400">
                            Semantic Score
                        </p>

                        <p className="mt-2 text-5xl font-bold text-cyan-400">
                            {candidate.semantic_score}%
                        </p>

                    </div>

                    <div className="rounded-2xl bg-violet-500/10 p-5">

                        <p className="text-gray-400">
                            Skill Score
                        </p>

                        <p className="mt-2 text-5xl font-bold text-violet-400">
                            {candidate.skill_score}%
                        </p>

                    </div>

                </div>

                {/* ATS Explainability */}

                <div className="mb-10">

                    <h3 className="mb-4 text-2xl font-bold">
                        ATS Score Breakdown
                    </h3>

                    <div className="space-y-5 rounded-2xl border border-white/10 p-6">

                        <div>

                            <div className="mb-2 flex justify-between">

                                <span>
                                    Semantic Match
                                </span>

                                <span>
                                    {
                                        candidate.semantic_score
                                    }%
                                </span>

                            </div>

                            <div className="h-3 rounded-full bg-white/10">

                                <div
                                    className="h-3 rounded-full bg-cyan-400"
                                    style={{
                                        width: `${candidate.semantic_score}%`
                                    }}
                                />

                            </div>

                        </div>

                        <div>

                            <div className="mb-2 flex justify-between">

                                <span>
                                    Skill Match
                                </span>

                                <span>
                                    {
                                        candidate.skill_score
                                    }%
                                </span>

                            </div>

                            <div className="h-3 rounded-full bg-white/10">

                                <div
                                    className="h-3 rounded-full bg-violet-400"
                                    style={{
                                        width: `${candidate.skill_score}%`
                                    }}
                                />

                            </div>

                        </div>

                        <div>

                            <div className="mb-2 flex justify-between">

                                <span>
                                    Final ATS Score
                                </span>

                                <span>
                                    {
                                        candidate.final_score
                                    }%
                                </span>

                            </div>

                            <div className="h-4 rounded-full bg-white/10">

                                <div
                                    className="h-4 rounded-full bg-emerald-400"
                                    style={{
                                        width: `${candidate.final_score}%`
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Skills */}

                <div className="mb-10 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-green-400">
                            Matched Skills
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {candidate.matched_skills?.map(
                                (skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-green-500/20 px-3 py-1 text-sm"
                                    >
                                        ✓ {skill}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-red-400">
                            Missing Skills
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {candidate.missing_skills?.map(
                                (skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-red-500/20 px-3 py-1 text-sm"
                                    >
                                        ✗ {skill}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                </div>

                {/* Skill Gap Analysis */}

                <div className="mb-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">

                    <h3 className="mb-4 text-2xl font-bold text-amber-400">
                        Skill Gap Analysis
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div>

                            <p className="mb-3 text-sm uppercase tracking-wider text-gray-400">
                                Critical Missing Skills
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {candidate.missing_skills?.length > 0 ? (

                                    candidate.missing_skills.map(
                                        (
                                            skill,
                                            index
                                        ) => (

                                            <span
                                                key={index}
                                                className="
                                    rounded-full
                                    bg-red-500/20
                                    px-3
                                    py-1
                                    text-sm
                                    text-red-300
                                "
                                            >
                                                {skill}
                                            </span>

                                        )
                                    )

                                ) : (

                                    <span
                                        className="
                            rounded-full
                            bg-green-500/20
                            px-3
                            py-1
                            text-sm
                            text-green-300
                        "
                                    >
                                        No Critical Gaps
                                    </span>

                                )}

                            </div>

                        </div>

                        <div>

                            <p className="mb-3 text-sm uppercase tracking-wider text-gray-400">
                                Impact Assessment
                            </p>

                            <div
                                className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                "
                            >

                                <p className="text-lg font-semibold">

                                    {
                                        candidate.missing_skills?.length >= 5
                                            ? "High Impact"
                                            : candidate.missing_skills?.length >= 2
                                                ? "Medium Impact"
                                                : "Low Impact"
                                    }

                                </p>

                                <p className="mt-2 text-sm text-gray-400">

                                    {
                                        candidate.missing_skills?.length >= 5
                                            ? "Several required skills are missing and may affect shortlisting."
                                            : candidate.missing_skills?.length >= 2
                                                ? "Candidate meets most requirements but has a few skill gaps."
                                                : "Candidate aligns well with the job requirements."
                                    }

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Resume Summary */}

                <div className="mb-10 grid gap-4 md:grid-cols-4">

                    <div className="rounded-xl bg-white/5 p-4 text-center">
                        <p className="text-3xl font-bold">
                            {candidate.education?.length || 0}
                        </p>
                        <p className="text-gray-400">
                            Education
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 text-center">
                        <p className="text-3xl font-bold">
                            {candidate.experience?.length || 0}
                        </p>
                        <p className="text-gray-400">
                            Experience
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 text-center">
                        <p className="text-3xl font-bold">
                            {candidate.projects?.length || 0}
                        </p>
                        <p className="text-gray-400">
                            Projects
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 text-center">
                        <p className="text-3xl font-bold">
                            {candidate.skills?.length || 0}
                        </p>
                        <p className="text-gray-400">
                            Skills
                        </p>
                    </div>

                </div>

                {/* Skills Inventory */}

                <section className="mb-10">

                    <h3 className="mb-4 text-2xl font-bold">
                        Skills Inventory
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {candidate.skills?.map(
                            (
                                skill,
                                index
                            ) => (

                                <span
                                    key={index}
                                    className="
                        rounded-full
                        bg-violet-500/20
                        px-4
                        py-2
                        text-sm
                    "
                                >
                                    {skill}
                                </span>

                            )
                        )}

                    </div>

                </section>

                {/* Experience */}

                <section className="mb-10">

                    <h3 className="mb-4 text-2xl font-bold">
                        Experience
                    </h3>

                    <div className="space-y-4">

                        {candidate.experience?.length ? (

                            candidate.experience.map(
                                (
                                    item,
                                    index
                                ) => (

                                    <div key={index}>
                                        {renderFlexibleItem(
                                            item
                                        )}
                                    </div>

                                )
                            )

                        ) : (

                            <div className="text-gray-500">
                                No experience found
                            </div>

                        )}

                    </div>

                </section>

                {/* Projects */}

                <section className="mb-10">

                    <h3 className="mb-4 text-2xl font-bold">
                        Projects
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">

                        {candidate.projects?.length ? (

                            candidate.projects.map(
                                (
                                    project,
                                    index
                                ) => (

                                    <div key={index}>
                                        {renderFlexibleItem(
                                            project
                                        )}
                                    </div>

                                )
                            )

                        ) : (

                            <div className="text-gray-500">
                                No projects found
                            </div>

                        )}

                    </div>

                </section>

                <section className="mb-10">

                    <h3 className="mb-4 text-2xl font-bold">
                        Education
                    </h3>

                    <div className="space-y-4">

                        {candidate.education?.length ? (

                            candidate.education.map(
                                (
                                    item,
                                    index
                                ) => (

                                    <div key={index}>
                                        {renderFlexibleItem(
                                            item
                                        )}
                                    </div>

                                )
                            )

                        ) : (

                            <div className="text-gray-500">
                                No education data
                            </div>

                        )}

                    </div>

                </section>

                {/* Strengths + Weaknesses */}

                <div className="grid gap-8 md:grid-cols-2">

                    <div>

                        <h3 className="mb-4 text-2xl font-bold text-green-400">
                            Strengths
                        </h3>

                        <ul className="space-y-3">

                            {candidate.strengths?.map(
                                (item, index) => (
                                    <li key={index}>
                                        ✓ {item}
                                    </li>
                                )
                            )}

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-4 text-2xl font-bold text-red-400">
                            Weaknesses
                        </h3>

                        <ul className="space-y-3">

                            {candidate.weaknesses?.map(
                                (item, index) => (
                                    <li key={index}>
                                        ✗ {item}
                                    </li>
                                )
                            )}

                        </ul>

                    </div>

                </div>

                {/* Recruiter Insights */}

                <div className="mb-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">

                    <h3 className="mb-5 text-2xl font-bold text-indigo-400">
                        Recruiter Insights
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">

                        <div className="rounded-xl bg-white/5 p-4">

                            <p className="text-sm text-gray-400">
                                Hiring Recommendation
                            </p>

                            <p className="mt-2 text-xl font-bold">
                                {recommendation}
                            </p>

                        </div>

                        <div className="rounded-xl bg-white/5 p-4">

                            <p className="text-sm text-gray-400">
                                Skill Coverage
                            </p>

                            <p className="mt-2 text-xl font-bold">
                                {candidate.skill_score}%
                            </p>

                        </div>

                        <div className="rounded-xl bg-white/5 p-4">

                            <p className="text-sm text-gray-400">
                                Relevant Projects
                            </p>

                            <p className="mt-2 text-xl font-bold">
                                {candidate.projects?.length || 0}
                            </p>

                        </div>

                        <div className="rounded-xl bg-white/5 p-4">

                            <p className="text-sm text-gray-400">
                                Relevant Experience
                            </p>

                            <p className="mt-2 text-xl font-bold">
                                {candidate.experience?.length || 0}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Recommendations */}

                <section className="mt-10">

                    <h3 className="mb-4 text-2xl font-bold text-blue-400">
                        Improvement Recommendations
                    </h3>

                    <div className="space-y-3">

                        {candidate.recommendations?.map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-blue-500/10 p-4"
                                >
                                    → {item}
                                </div>
                            )
                        )}

                    </div>

                </section>

            </div>

        </div>
    );
}