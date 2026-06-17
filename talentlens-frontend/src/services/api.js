const API_URL =
    `${process.env.NEXT_PUBLIC_API_URL}/analyze`;

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