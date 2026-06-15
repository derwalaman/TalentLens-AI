from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form
)

import tempfile
import os

from app.services.parser_service import (
    extract_text_from_pdf
)

from app.services.analysis_service import (
    analyze_resume_text
)

router = APIRouter()


@router.post("/compare")
async def compare_resumes(
    resume_a: UploadFile = File(...),
    resume_b: UploadFile = File(...),
    job_description: str = Form(...)
):

    def process_pdf(file):

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".pdf"
        ) as temp:

            temp.write(
                file.file.read()
            )

            path = temp.name

        text = extract_text_from_pdf(
            path
        )

        os.remove(path)

        return text

    text_a = process_pdf(
        resume_a
    )

    text_b = process_pdf(
        resume_b
    )

    candidate_a = analyze_resume_text(
            text_a,
            job_description
        )

    candidate_b = analyze_resume_text(
            text_b,
            job_description
        )

    winner = (
        "Resume A"
        if candidate_a["final_score"]
        >
        candidate_b["final_score"]
        else "Resume B"
    )

    advantages = []

    if (
        candidate_a["semantic_score"]
        >
        candidate_b["semantic_score"]
    ):
        advantages.append(
            "Better semantic alignment"
        )

    if (
        len(
            candidate_a["matched_skills"]
        )
        >
        len(
            candidate_b["matched_skills"]
        )
    ):
        advantages.append(
            "More matched skills"
        )
    
    if winner == "Resume A":
        recommendation = "Proceed to Interview"
    else:
        recommendation = "Proceed to Interview"

    return {
        "winner": winner,
        "recommendation": recommendation,
        "candidate_a": candidate_a,
        "candidate_b": candidate_b,
        "advantages": advantages,
    }