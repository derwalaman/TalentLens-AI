SKILL_MAP = {
    "python": "Python",
    "java": "Java",
    "javascript": "JavaScript",
    "react": "React",
    "next.js": "Next.js",
    "nextjs": "Next.js",
    "node": "Node.js",
    "nodejs": "Node.js",
    "express": "Express.js",
    "mongodb": "MongoDB",
    "sql": "SQL",
    "mysql": "MySQL",
    "fastapi": "FastAPI",
    "docker": "Docker",
    "aws": "AWS",
    "git": "Git",
    "github": "GitHub",
    "machine learning": "Machine Learning",
    "deep learning": "Deep Learning",
    "data analysis": "Data Analysis",
    "data analytics": "Data Analysis",
    "analytics": "Data Analysis",
    "tensorflow": "TensorFlow",
    "pytorch": "PyTorch",
    "nlp": "NLP",
    "llm": "LLM",
    "rag": "RAG",
    "vector search": "Vector Search",
    "faiss": "FAISS",
    "embeddings": "Embeddings"
}


def extract_skills(text):

    text = text.lower()

    found = set()

    for keyword, skill in SKILL_MAP.items():

        if keyword in text:

            found.add(skill)

    return list(found)