"use client";

export default function ComparisonTable({
    result,
}) {

    const allSkills = [
        ...new Set([
            ...result.candidate_a.matched_skills,
            ...result.candidate_a.missing_skills,
            ...result.candidate_b.matched_skills,
            ...result.candidate_b.missing_skills,
        ]),
    ];

    return (
        <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            p-8
            "
        >

            <h2 className="mb-8 text-4xl font-bold">
                Head To Head Analysis
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b border-white/10">

                        <th className="p-4 text-left">
                            Metric
                        </th>

                        <th className="p-4 text-center">
                            Resume A
                        </th>

                        <th className="p-4 text-center">
                            Resume B
                        </th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td className="p-4">
                            Final Score
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_a.final_score}%
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_b.final_score}%
                        </td>

                    </tr>

                    <tr>

                        <td className="p-4">
                            Semantic Score
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_a.semantic_score}%
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_b.semantic_score}%
                        </td>

                    </tr>

                    <tr>

                        <td className="p-4">
                            Skill Score
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_a.skill_score}%
                        </td>

                        <td className="p-4 text-center">
                            {result.candidate_b.skill_score}%
                        </td>

                    </tr>

                </tbody>

            </table>

            <div className="mt-12">

                <h3 className="mb-6 text-3xl font-bold">
                    Skill Comparison
                </h3>

                <div className="space-y-3">

                    {allSkills.map((skill) => (

                        <div
                            key={skill}
                            className="
                            flex items-center
                            justify-between
                            rounded-xl
                            bg-white/5
                            p-4
                            "
                        >

                            <span>
                                {skill}
                            </span>

                            <div className="flex gap-16">

                                <span>
                                    {result.candidate_a.matched_skills.includes(skill)
                                        ? "✅"
                                        : "❌"}
                                </span>

                                <span>
                                    {result.candidate_b.matched_skills.includes(skill)
                                        ? "✅"
                                        : "❌"}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}