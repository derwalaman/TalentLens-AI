def calculate_final_score(
    embedding_score,
    matched_skills,
    total_required_skills,
):
    skill_score = (
        len(matched_skills)
        / max(total_required_skills, 1)
    ) * 100

    final_score = (
        embedding_score * 0.7
        +
        skill_score * 0.3
    )

    return round(final_score, 2)