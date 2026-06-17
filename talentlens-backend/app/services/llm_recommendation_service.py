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


def generate_llm_recommendations(
    missing_skills
):

    prompt = f"""
You are a senior recruiter and career coach.

Based on these missing skills:

{missing_skills}

Generate actionable recommendations.

Return ONLY valid JSON.

{{
    "recommendations": [
        ""
    ]
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