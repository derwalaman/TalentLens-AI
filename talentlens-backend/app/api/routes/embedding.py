from fastapi import APIRouter

from app.services.embedding_service import (
    generate_embedding
)

router = APIRouter()


@router.post("/embedding")
def create_embedding(
    text: str
):
    embedding = generate_embedding(
        text
    )

    return {
        "dimensions": len(embedding),
        "sample": embedding[:10].tolist()
    }