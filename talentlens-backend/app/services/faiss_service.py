import faiss
import numpy as np


def semantic_similarity(
    resume_embedding,
    jd_embedding
):
    resume_embedding = np.array(
        [resume_embedding]
    ).astype("float32")

    jd_embedding = np.array(
        [jd_embedding]
    ).astype("float32")

    faiss.normalize_L2(
        resume_embedding
    )

    faiss.normalize_L2(
        jd_embedding
    )

    index = faiss.IndexFlatIP(
        resume_embedding.shape[1]
    )

    index.add(
        resume_embedding
    )

    scores, _ = index.search(
        jd_embedding,
        1
    )

    return float(
        scores[0][0]
    )