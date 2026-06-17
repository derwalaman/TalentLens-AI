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

from app.services.llm_candidate_summary_service import (
    generate_llm_candidate_summary
)

from app.services.insight_service import (
    generate_insights
)

from app.services.recommendation_service import (
    generate_recommendations
)

from app.services.skill_matcher import (
    skill_match
)

from app.services.llm_resume_parser import (
    parse_resume_with_llm
)

from app.services.llm_jd_parser import (
    parse_job_description
)

from app.services.llm_recommendation_service import (
    generate_llm_recommendations
)

from app.services.llm_insight_service import (
    generate_llm_insights
)

from app.services.candidate_summary_service import (
    generate_candidate_summary
)


def analyze_resume_text(
    resume_text,
    job_description
):

    # ----------------------------------
    # Resume Parser
    # ----------------------------------

    try:

        resume_data = (
            parse_resume_with_llm(
                resume_text
            )
        )

        print(
            "\n✅ Using Gemini Resume Parser\n"
        )

    except Exception as e:

        print(
            f"\n⚠ Resume Parser Failed: {e}\n"
        )

        resume_data = (
            extract_resume_data(
                resume_text
            )
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

    llm_skills = resume_data.get(
        "skills",
        []
    )

    if llm_skills:

        resume_skills = llm_skills

    else:

        resume_skills = extract_skills(
            resume_text
        )

    # ----------------------------------
    # JD Parser
    # ----------------------------------

    job_title = ""

    responsibilities = []

    technical_skills = []

    tools = []

    soft_skills = []

    try:

        jd_data = (
            parse_job_description(
                job_description
            )
        )

        technical_skills = (
            jd_data.get(
                "technical_skills",
                []
            )
        )

        tools = (
            jd_data.get(
                "tools",
                []
            )
        )

        soft_skills = (
            jd_data.get(
                "soft_skills",
                []
            )
        )

        responsibilities = (
            jd_data.get(
                "responsibilities",
                []
            )
        )

        job_title = (
            jd_data.get(
                "job_title",
                ""
            )
        )

        jd_skills = (
            technical_skills
            +
            tools
        )

        jd_skills = list(
            dict.fromkeys(
                jd_skills
            )
        )

        print(
            "\n✅ Using Gemini JD Parser\n"
        )

    except Exception as e:

        print(
            f"\n⚠ JD Parser Failed: {e}\n"
        )

        jd_skills = extract_skills(
            job_description
        )

    # ----------------------------------
    # Semantic Skill Matching
    # ----------------------------------

    matched_skills = []

    missing_skills = []

    for jd_skill in jd_skills:

        found = any(
            skill_match(
                jd_skill,
                resume_skill
            )
            for resume_skill
            in resume_skills
        )

        if found:

            matched_skills.append(
                jd_skill
            )

        else:

            missing_skills.append(
                jd_skill
            )

    matched_count = len(
        matched_skills
    )

    total_skills = len(
        jd_skills
    )

    skill_coverage = round(
        (
            matched_count
            / total_skills
        ) * 100,
        2
    ) if total_skills else 0

    # ----------------------------------
    # Semantic Similarity
    # ----------------------------------

    resume_embedding = (
        generate_embedding(
            resume_text
        )
    )

    jd_embedding = (
        generate_embedding(
            job_description
        )
    )

    semantic_score = round(
        semantic_similarity(
            resume_embedding,
            jd_embedding
        ) * 100,
        2
    )

    score_data = (
        calculate_final_score(
            semantic_score,
            matched_skills,
            len(jd_skills)
        )
    )

    # ----------------------------------
    # Heatmap
    # ----------------------------------

    heatmap = []

    for skill in jd_skills:

        heatmap.append(
            {
                "skill": skill,
                "matched":
                    skill
                    in matched_skills
            }
        )

    # ----------------------------------
    # Insights
    # ----------------------------------

    try:

        insights = (
            generate_llm_insights(
                matched_skills,
                missing_skills,
                projects,
                experience
            )
        )

        print(
            "\n✅ Using Gemini Insights\n"
        )

    except Exception as e:

        print(
            f"\n⚠ Insight Generation Failed: {e}\n"
        )

        insights = (
            generate_insights(
                semantic_score,
                matched_skills,
                missing_skills,
                projects,
                experience
            )
        )

    # ----------------------------------
    # Recommendations
    # ----------------------------------

    try:

        recommendations = (
            generate_llm_recommendations(
                missing_skills
            )[
                "recommendations"
            ]
        )

        print(
            "\n✅ Using Gemini Recommendations\n"
        )

    except Exception as e:

        print(
            f"\n⚠ Recommendation Generation Failed: {e}\n"
        )

        recommendations = (
            generate_recommendations(
                missing_skills
            )
        )

    try:

        candidate_summary = (
            generate_llm_candidate_summary(
                score_data["final_score"],
                score_data["semantic_score"],
                score_data["skill_score"],
                matched_skills,
                projects,
                experience
            )
        )

    except Exception:

        candidate_summary = (
            generate_candidate_summary(
                score_data["final_score"],
                score_data["semantic_score"],
                score_data["skill_score"],
                projects,
                experience,
                matched_skills
            )
        )

    # ----------------------------------
    # Final Response
    # ----------------------------------

    return {

        "semantic_score":
            score_data[
                "semantic_score"
            ],

        "skill_score":
            score_data[
                "skill_score"
            ],

        "final_score":
            score_data[
                "final_score"
            ],

        "job_title":
            job_title,

        "responsibilities":
            responsibilities,

        "matched_skills":
            matched_skills,

        "missing_skills":
            missing_skills,

        "recommendations":
            recommendations,

        "education":
            education,

        "projects":
            projects,

        "experience":
            experience,

        "skills":
            resume_skills,

        "heatmap":
            heatmap,

        "skill_coverage":
            skill_coverage,

        "strengths":
            insights[
                "strengths"
            ],

        "weaknesses":
            insights[
                "weaknesses"
            ],

        "technical_skills":
            technical_skills,

        "tools":
            tools,

        "soft_skills":
            soft_skills,

        "candidate_summary":
            candidate_summary
    }