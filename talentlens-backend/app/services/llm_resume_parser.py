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


def parse_resume_with_llm(
    resume_text: str
):

    prompt = f"""
You are an ATS Resume Parser.

Extract information from the resume
and return ONLY valid JSON.

Normalize section names:

Selected Projects -> projects
Academic Projects -> projects
Relevant Projects -> projects

Internships -> experience
Work Experience -> experience
Employment History -> experience

Return schema:

{{
    "education": [],
    "experience": [],
    "projects": [],
    "skills": []
}}

Resume:

{resume_text}
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