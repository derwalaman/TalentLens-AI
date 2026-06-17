from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form
)

from typing import List

import tempfile
import os

from app.services.parser_service import (
    extract_text_from_pdf
)

from app.services.analysis_service import (
    analyze_resume_text
)

router = APIRouter()


@router.post("/rank")
async def rank_resumes(
    files: List[UploadFile] = File(...),
    job_description: str = Form(...)
):

    candidates = []

    for file in files:

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".pdf"
        ) as temp:

            content = await file.read()

            temp.write(content)

            temp_path = temp.name

        try:

            resume_text = (
                extract_text_from_pdf(
                    temp_path
                )
            )

            analysis = (
                analyze_resume_text(
                    resume_text,
                    job_description
                )
            )

            candidates.append(
                {
                    "name":
                        file.filename,

                    "final_score":
                        analysis[
                            "final_score"
                        ],

                    "semantic_score":
                        analysis[
                            "semantic_score"
                        ],

                    "skill_score":
                        analysis[
                            "skill_score"
                        ],

                    "matched_skills":
                        analysis[
                            "matched_skills"
                        ],

                    "missing_skills":
                        analysis[
                            "missing_skills"
                        ],

                    "strengths":
                        analysis[
                            "strengths"
                        ],

                    "weaknesses":
                        analysis[
                            "weaknesses"
                        ],

                    "recommendations":
                        analysis[
                            "recommendations"
                        ],

                    "education":
                        analysis.get(
                            "education",
                            []
                        ),

                    "projects":
                        analysis.get(
                            "projects",
                            []
                        ),

                    "experience":
                        analysis.get(
                            "experience",
                            []
                        ),

                    "skills":
                        analysis.get(
                            "skills",
                            []
                        ),

                    "job_title":
                        analysis.get(
                            "job_title",
                            ""
                        ),

                    "technical_skills":
                        analysis.get(
                            "technical_skills",
                            []
                        ),

                    "tools":
                        analysis.get(
                            "tools",
                            []
                        ),

                    "soft_skills":
                        analysis.get(
                            "soft_skills",
                            []
                        ),

                    "responsibilities":
                        analysis.get(
                            "responsibilities",
                            []
                        ),
                    
                    "candidate_summary":
                        analysis.get(
                            "candidate_summary",
                            {}
                        )       
                }
            )

        finally:

            if os.path.exists(
                temp_path
            ):
                os.remove(
                    temp_path
                )

    candidates.sort(
        key=lambda x:
            x["final_score"],
        reverse=True
    )

    return {
        "ranked_candidates":
            candidates
    }