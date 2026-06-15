const API_URL =
    "http://127.0.0.1:8000/api/v1/rank";

export async function rankResumes(
    files,
    jobDescription
) {
    const formData = new FormData();

    files.forEach((file) => {
        formData.append(
            "files",
            file
        );
    });

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

    return response.json();
}