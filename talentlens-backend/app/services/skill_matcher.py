from sklearn.metrics.pairwise import (
    cosine_similarity
)

from app.services.embedding_service import (
    get_embedding_model
)

model = get_embedding_model()


def skill_match(
    jd_skill,
    resume_skill,
    threshold=0.65
):

    jd_embedding = model.encode(
        jd_skill
    )

    resume_embedding = model.encode(
        resume_skill
    )

    similarity = cosine_similarity(
        [jd_embedding],
        [resume_embedding]
    )[0][0]

    return similarity >= threshold