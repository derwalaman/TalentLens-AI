import re


SECTION_HEADERS = [
    "education",
    "experience",
    "work experience",
    "projects",
    "technical skills",
    "skills",
    "achievements",
    "certifications"
]


def is_section_header(line):

    clean = line.strip().lower()

    return clean in SECTION_HEADERS


def extract_resume_data(text):

    lines = [
        line.strip()
        for line in text.split("\n")
        if line.strip()
    ]

    education = []
    projects = []
    experience = []

    current = None

    for line in lines:

        lower = line.lower()

        if is_section_header(line):

            if "education" in lower:
                current = "education"

            elif "project" in lower:
                current = "projects"

            elif "experience" in lower:
                current = "experience"

            else:
                current = None

            continue

        # Stop collecting when another section appears
        if current is None:
            continue

        # Education
        if current == "education":

            if len(line) < 120:
                education.append(line)

        # Projects
        elif current == "projects":

            if (
                "|" in line
                or "github" in lower
                or "deploy" in lower
            ):
                projects.append(line)

            elif (
                len(line) < 60
                and not line.startswith("•")
                and not re.search(r"20\d{2}", line)
            ):
                projects.append(line)

        # Experience
        elif current == "experience":

            if (
                "intern" in lower
                or "engineer" in lower
                or "developer" in lower
                or "analyst" in lower
            ):
                experience.append(line)

    return {
        "education": list(dict.fromkeys(education))[:5],
        "projects": list(dict.fromkeys(projects))[:10],
        "experience": list(dict.fromkeys(experience))[:10]
    }