export function getCandidateFit(score) {
    if (score >= 85) {
        return {
            label: "Excellent Fit",
            color: "text-green-400",
        };
    }

    if (score >= 70) {
        return {
            label: "Good Fit",
            color: "text-cyan-400",
        };
    }

    if (score >= 50) {
        return {
            label: "Moderate Fit",
            color: "text-yellow-400",
        };
    }

    return {
        label: "Poor Fit",
        color: "text-red-400",
    };
}