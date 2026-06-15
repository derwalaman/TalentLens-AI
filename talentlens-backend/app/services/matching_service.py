def calculate_final_score(
    semantic_score,
    matched_skills,
    total_skills
):

    if total_skills == 0:
        skill_score = 100

    else:
        skill_score = (
            len(matched_skills)
            / total_skills
        ) * 100

    final_score = (
        semantic_score * 0.7
        +
        skill_score * 0.3
    )

    return {
        "semantic_score": round(
            semantic_score,
            2
        ),

        "skill_score": round(
            skill_score,
            2
        ),

        "final_score": round(
            final_score,
            2
        )
    }