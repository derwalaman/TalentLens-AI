from fastapi import APIRouter, UploadFile, File, Form
import tempfile
import os

from app.services.parser_service import (
    extract_text_from_pdf
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

from app.services.skill_service import (
    extract_skills
)

from app.services.recommendation_service import (
    generate_recommendations
)

from app.services.resume_extractor import (
    extract_resume_data
)

from app.services.insight_service import (
    generate_insights
)

router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".pdf"
    ) as temp_file:

        content = await file.read()

        temp_file.write(content)

        temp_path = temp_file.name

    try:

        # -----------------------------
        # Extract Resume Text
        # -----------------------------
        resume_text = extract_text_from_pdf(
            temp_path
        )

        # -----------------------------
        # Extract Resume Insights
        # -----------------------------
        resume_data = extract_resume_data(
            resume_text
        )

        education = resume_data.get(
            "education",
            []
        )

        projects = resume_data.get(
            "projects",
            []
        )

        experience = resume_data.get(
            "experience",
            []
        )

        # -----------------------------
        # Skills Extraction
        # -----------------------------
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

        matched_count = len(matched_skills)

        total_skills = len(jd_skills)

        skill_coverage = round(
            (matched_count / total_skills) * 100,
            2
        ) if total_skills else 0

        # -----------------------------
        # Recommendations
        # -----------------------------
        recommendations = (
            generate_recommendations(
                missing_skills
            )
        )

        # -----------------------------
        # Semantic Matching
        # -----------------------------
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

        heatmap = []

        for skill in jd_skills:
            heatmap.append(
                {
                    "skill": skill,
                    "matched": skill in matched_skills
                }
            )
        
        insights = generate_insights(
            semantic_score,
            matched_skills,
            missing_skills,
            projects,
            experience
        )

        return {
            "semantic_score": score_data["semantic_score"],

            "skill_score": score_data["skill_score"],

            "final_score": score_data["final_score"],

            "resume_length": len(
                resume_text
            ),

            "matched_skills": matched_skills,

            "missing_skills": missing_skills,

            "recommendations": recommendations,

            "education": education,

            "projects": projects,

            "experience": experience,

            "heatmap": heatmap,

            "skill_coverage": skill_coverage,

            "strengths": insights["strengths"],

            "weaknesses": insights["weaknesses"]
        }

    finally:

        if os.path.exists(
            temp_path
        ):
            os.remove(
                temp_path
            )