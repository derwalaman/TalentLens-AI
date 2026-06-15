from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.parser import router as parser_router
from app.api.routes.embedding import (
    router as embedding_router
)
from app.api.routes.analyze import (
    router as analyze_router
)
from app.api.routes.rank import (
    router as rank_router
)
from app.api.routes.compare import (
    router as compare_router
)

app = FastAPI(
    title="TalentLens AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    parser_router,
    prefix="/api/v1"
)

app.include_router(
    embedding_router,
    prefix="/api/v1"
)

app.include_router(
    analyze_router,
    prefix="/api/v1"
)

app.include_router(
    rank_router,
    prefix="/api/v1"
)

app.include_router(
    compare_router,
    prefix="/api/v1"
)


@app.get("/")
def root():
    return {
        "message": "TalentLens AI Backend Running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }