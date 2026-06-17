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


def generate_llm_insights(
    matched_skills,
    missing_skills,
    projects,
    experience
):

    prompt = f"""
You are a senior technical recruiter.

Analyze this candidate.

Matched Skills:
{matched_skills}

Missing Skills:
{missing_skills}

Projects:
{projects}

Experience:
{experience}

Provide recruiter-style strengths and weaknesses.

Return ONLY valid JSON.

{{
    "strengths": [],
    "weaknesses": []
}}
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