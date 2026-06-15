const API_URL =
    "http://127.0.0.1:8000/api/v1/compare";

export async function compareResumes(
    fileA,
    fileB,
    jobDescription
) {
    const formData = new FormData();

    formData.append(
        "resume_a",
        fileA
    );

    formData.append(
        "resume_b",
        fileB
    );

    formData.append(
        "job_description",
        jobDescription
    );

    const response = await fetch(
        API_URL,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error(
            "Comparison failed"
        );
    }

    return response.json();
}