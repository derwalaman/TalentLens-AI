def generate_candidate_summary(
    final_score,
    semantic_score,
    skill_score,
    projects,
    experience,
    matched_skills,
):

    if final_score >= 80:
        overall_fit = "Strong"
        recommendation = "Strongly Recommended"

    elif final_score >= 65:
        overall_fit = "Good"
        recommendation = "Recommended"

    elif final_score >= 50:
        overall_fit = "Moderate"
        recommendation = "Consider"

    else:
        overall_fit = "Weak"
        recommendation = "Not Recommended"

    experience_strength = (
        "Strong"
        if len(experience) >= 2
        else "Moderate"
        if len(experience) == 1
        else "Weak"
    )

    project_strength = (
        "Strong"
        if len(projects) >= 2
        else "Moderate"
        if len(projects) == 1
        else "Weak"
    )

    skill_strength = (
        "Strong"
        if len(matched_skills) >= 5
        else "Moderate"
        if len(matched_skills) >= 2
        else "Weak"
    )

    suitable_roles = []

    skill_text = " ".join(
        matched_skills
    ).lower()

    if (
        "machine learning" in skill_text
        or "artificial intelligence" in skill_text
    ):
        suitable_roles.append(
            "AI Engineer"
        )

    if (
        "data analysis" in skill_text
    ):
        suitable_roles.append(
            "Data Analyst"
        )

    if (
        "fastapi" in skill_text
        or "node" in skill_text
    ):
        suitable_roles.append(
            "Backend Developer"
        )

    if (
        "react" in skill_text
        or "next.js" in skill_text
    ):
        suitable_roles.append(
            "Full Stack Developer"
        )

    return {

        "overall_fit":
            overall_fit,

        "recommendation":
            recommendation,

        "experience_strength":
            experience_strength,

        "project_strength":
            project_strength,

        "skill_strength":
            skill_strength,

        "suitable_roles":
            suitable_roles,

        "score_breakdown": {

            "semantic_score":
                semantic_score,

            "skill_score":
                skill_score,

            "final_score":
                final_score,
        },
    }