def generate_insights(
    semantic_score,
    matched_skills,
    missing_skills,
    projects,
    experience,
):

    strengths = []
    weaknesses = []

    # Experience

    if len(experience) >= 2:
        strengths.append(
            "Multiple professional experiences demonstrate practical exposure."
        )

    elif len(experience) == 1:
        strengths.append(
            "Has relevant internship or work experience."
        )

    else:
        weaknesses.append(
            "Limited professional experience."
        )

    # Projects

    if len(projects) >= 2:
        strengths.append(
            "Strong project portfolio with hands-on implementation."
        )

    else:
        weaknesses.append(
            "Project portfolio could be expanded."
        )

    # Skill Match

    if len(matched_skills) >= 5:
        strengths.append(
            "Strong alignment with required technical skills."
        )

    elif len(matched_skills) >= 3:
        strengths.append(
            "Reasonable alignment with job requirements."
        )

    # Missing Skills

    if missing_skills:

        weaknesses.append(
            f"Missing critical skills: {', '.join(missing_skills)}"
        )

    # Semantic Alignment

    if semantic_score >= 75:

        strengths.append(
            "Resume content is highly relevant to the job description."
        )

    elif semantic_score >= 55:

        strengths.append(
            "Resume shows moderate relevance to the role."
        )

    else:

        weaknesses.append(
            "Resume content has low semantic relevance to the target role."
        )

    return {
        "strengths": strengths,
        "weaknesses": weaknesses,
    }