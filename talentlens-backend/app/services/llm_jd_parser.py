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


def parse_job_description(
    job_description: str
):

    prompt = f"""
You are an ATS Job Description Parser.

Analyze the job description and return ONLY valid JSON.

IMPORTANT:

1. Normalize skill names.

Examples:

Understanding of AI -> Artificial Intelligence
Understanding of Machine Learning -> Machine Learning
Research skills -> Research
Communication skills -> Communication
Presentation skills -> Presentation
Teamwork skills -> Teamwork

2. Separate skills into categories.

technical_skills:
Programming, AI, ML, Cloud, Databases, Frameworks.

tools:
Git, Docker, AWS, Kubernetes, TensorFlow, PyTorch etc.

soft_skills:
Communication, Leadership, Teamwork, Research, Organization etc.

Return ONLY this schema:

{{
    "job_title": "",
    "technical_skills": [],
    "tools": [],
    "soft_skills": [],
    "responsibilities": []
}}

Job Description:

{job_description}
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