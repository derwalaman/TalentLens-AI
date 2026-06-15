const API_URL =
    "http://127.0.0.1:8000/api/v1/analyze";

export async function analyzeResume(
    file,
    jobDescription
) {
    const formData = new FormData();

    formData.append("file", file);

    formData.append(
        "job_description",
        jobDescription
    );

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Analysis failed");
    }

    return response.json();
}