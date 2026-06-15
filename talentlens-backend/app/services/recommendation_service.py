def generate_recommendations(missing_skills):
    recommendations = []

    roadmap = {
        "Python":
            "Improve Python fundamentals and DSA",

        "Machine Learning":
            "Build ML projects and learn Scikit-Learn",

        "Deep Learning":
            "Learn PyTorch and Neural Networks",

        "Docker":
            "Learn Docker and containerization",

        "AWS":
            "Learn AWS deployment fundamentals",

        "SQL":
            "Practice SQL queries and databases",

        "Data Analysis":
            "Build analytics projects using Pandas",

        "FastAPI":
            "Create REST APIs with FastAPI",

        "Git":
            "Learn Git branching and workflows"
    }

    for skill in missing_skills:
        if skill in roadmap:
            recommendations.append(
                roadmap[skill]
            )

    return recommendations