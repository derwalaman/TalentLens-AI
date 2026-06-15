export function getRecommendation(result) {
    const score = result.match_score;

    let verdict = "";
    let recommendation = "";

    if (score >= 80) {
        verdict = "Excellent Match";

        recommendation =
            "Strong candidate. Proceed to interview.";
    }

    else if (score >= 60) {
        verdict = "Good Match";

        recommendation =
            "Candidate fits most requirements.";
    }

    else if (score >= 40) {
        verdict = "Moderate Match";

        recommendation =
            "Candidate satisfies some requirements but has skill gaps.";
    }

    else {
        verdict = "Weak Match";

        recommendation =
            "Significant gaps detected. Additional training may be required.";
    }

    return {
        verdict,
        recommendation,
    };
}