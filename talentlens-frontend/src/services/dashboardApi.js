const API_URL =
    `${process.env.NEXT_PUBLIC_API_URL}/rank`;

export async function rankCandidates(
    files,
    jobDescription
) {

    const formData =
        new FormData();

    files.forEach(
        (file) => {

            formData.append(
                "files",
                file
            );

        }
    );

    formData.append(
        "job_description",
        jobDescription
    );

    const response =
        await fetch(
            API_URL,
            {
                method: "POST",
                body: formData,
            }
        );

    if (!response.ok) {

        throw new Error(
            "Failed to rank candidates"
        );

    }

    return response.json();
}