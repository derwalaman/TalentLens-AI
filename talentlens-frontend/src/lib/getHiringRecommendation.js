export function getHiringRecommendation(
    score
) {
    if (score >= 85)
        return "Strongly Recommended";

    if (score >= 70)
        return "Recommended";

    if (score >= 55)
        return "Consider";

    return "Not Recommended";
}