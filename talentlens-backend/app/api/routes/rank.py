from fastapi import APIRouter, UploadFile, File, Form
from typing import List
import tempfile
import os

from app.services.parser_service import (
    extract_text_from_pdf
)

from app.services.embedding_service import (
    generate_embedding
)

from app.services.faiss_service import (
    semantic_similarity
)

router = APIRouter()


@router.post("/rank")
async def rank_resumes(
    files: List[UploadFile] = File(...),
    job_description: str = Form(...)
):

    candidates = []

    jd_embedding = generate_embedding(
        job_description
    )

    for file in files:

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".pdf"
        ) as temp:

            content = await file.read()

            temp.write(content)

            temp_path = temp.name

        resume_text = extract_text_from_pdf(
            temp_path
        )

        resume_embedding = generate_embedding(
            resume_text
        )

        similarity = semantic_similarity(
            resume_embedding,
            jd_embedding
        )

        score = round(
            similarity * 100,
            2
        )

        candidates.append(
            {
                "name": file.filename,
                "score": score
            }
        )

        os.remove(temp_path)

    candidates.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return {
        "ranked_candidates":
        candidates
    }