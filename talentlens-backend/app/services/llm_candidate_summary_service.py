import json
import os

import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv(
        "GEMINI_API_KEY"
    )
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_llm_candidate_summary(
    final_score,
    semantic_score,
    skill_score,
    matched_skills,
    projects,
    experience
):

    prompt = f"""
You are a Senior Technical Recruiter.

Analyze this candidate.

Return ONLY valid JSON.

Schema:

{{
    "overall_fit": "",
    "recommendation": "",
    "experience_strength": "",
    "project_strength": "",
    "skill_strength": "",
    "suitable_roles": []
}}

Candidate:

ATS Score:
{final_score}

Semantic Score:
{semantic_score}

Skill Score:
{skill_score}

Matched Skills:
{matched_skills}

Projects:
{projects}

Experience:
{experience}
"""

    response = model.generate_content(
        prompt
    )

    cleaned = (
        response.text
        .replace(
            "```json",
            ""
        )
        .replace(
            "```",
            ""
        )
        .strip()
    )

    return json.loads(
        cleaned
    )