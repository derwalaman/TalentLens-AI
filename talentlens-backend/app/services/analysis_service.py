from app.services.skill_service import (
    extract_skills
)

from app.services.embedding_service import (
    generate_embedding
)

from app.services.faiss_service import (
    semantic_similarity
)

from app.services.matching_service import (
    calculate_final_score
)

from app.services.resume_extractor import (
    extract_resume_data
)

from app.services.insight_service import (
    generate_insights
)

from app.services.recommendation_service import (
    generate_recommendations
)


def analyze_resume_text(
    resume_text,
    job_description
):

    resume_data = extract_resume_data(
        resume_text
    )

    resume_skills = extract_skills(
        resume_text
    )

    jd_skills = extract_skills(
        job_description
    )

    resume_set = {
        skill.lower()
        for skill in resume_skills
    }

    matched_skills = [
        skill
        for skill in jd_skills
        if skill.lower() in resume_set
    ]

    missing_skills = [
        skill
        for skill in jd_skills
        if skill.lower() not in resume_set
    ]

    resume_embedding = generate_embedding(
        resume_text
    )

    jd_embedding = generate_embedding(
        job_description
    )

    semantic_score = round(
        semantic_similarity(
            resume_embedding,
            jd_embedding
        ) * 100,
        2
    )

    score_data = calculate_final_score(
        semantic_score,
        matched_skills,
        len(jd_skills)
    )

    insights = generate_insights(
        semantic_score,
        matched_skills,
        missing_skills,
        resume_data["projects"],
        resume_data["experience"],
    )

    return {
        "semantic_score":
            score_data["semantic_score"],

        "skill_score":
            score_data["skill_score"],

        "final_score":
            score_data["final_score"],

        "matched_skills":
            matched_skills,

        "missing_skills":
            missing_skills,

        "strengths":
            insights["strengths"],

        "weaknesses":
            insights["weaknesses"],

        "recommendations":
            generate_recommendations(
                missing_skills
            ),
    }