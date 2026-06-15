from fastapi import APIRouter, UploadFile, File
import tempfile
import os

from app.services.parser_service import extract_text_from_pdf

router = APIRouter()


@router.post("/parse")
async def parse_resume(
    file: UploadFile = File(...)
):
    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".pdf"
    ) as temp_file:

        content = await file.read()

        temp_file.write(content)

        temp_path = temp_file.name

    extracted_text = extract_text_from_pdf(
        temp_path
    )

    os.remove(temp_path)

    return {
        "text": extracted_text
    }