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

        resume_text = (
            extract_text_from_pdf(
                temp_path
            )
        )

        result = (
            analyze_resume_text(
                resume_text,
                job_description
            )
        )

        result[
            "resume_length"
        ] = len(
            resume_text
        )

        return result

    finally:

        if os.path.exists(
            temp_path
        ):
            os.remove(
                temp_path
            )