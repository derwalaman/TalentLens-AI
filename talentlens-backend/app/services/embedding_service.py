from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)


def generate_embedding(text):

    return model.encode(
        text,
        convert_to_numpy=True,
        normalize_embeddings=True
    )