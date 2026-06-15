import fitz
import re


def extract_text_from_pdf(pdf_path):

    doc = fitz.open(pdf_path)

    text = ""

    for page in doc:
        text += page.get_text()

    doc.close()

    text = re.sub(r"\n+", "\n", text)

    return text.strip()