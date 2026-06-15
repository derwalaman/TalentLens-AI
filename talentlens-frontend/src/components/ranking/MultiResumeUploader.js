"use client";

import { Upload, FileText, Trash2 } from "lucide-react";

export default function MultiResumeUploader({
    files,
    setFiles,
}) {

    const handleChange = (e) => {

        const newFiles =
            Array.from(e.target.files);

        setFiles((prevFiles) => {

            const existingNames =
                prevFiles.map(
                    (file) => file.name
                );

            const uniqueFiles =
                newFiles.filter(
                    (file) =>
                        !existingNames.includes(
                            file.name
                        )
                );

            return [
                ...prevFiles,
                ...uniqueFiles,
            ];
        });

        // Reset input so same file can be uploaded again
        e.target.value = "";
    };

    const removeFile = (index) => {

        setFiles(
            files.filter(
                (_, i) => i !== index
            )
        );

    };

    return (
        <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            "
        >

            <h2
                className="
                mb-6
                text-3xl
                font-bold
                "
            >
                Upload Resumes
            </h2>

            <label
                className="
                flex
                h-72
                cursor-pointer
                flex-col
                items-center
                justify-center
                rounded-3xl
                border-2
                border-dashed
                border-cyan-500/30
                transition
                hover:border-cyan-400
                hover:bg-cyan-500/5
                "
            >

                <Upload
                    size={52}
                    className="
                    mb-4
                    text-cyan-400
                    "
                />

                <p
                    className="
                    text-xl
                    font-medium
                    "
                >
                    Upload Multiple PDFs
                </p>

                <p
                    className="
                    mt-2
                    text-gray-400
                    "
                >
                    Select one or many resumes
                </p>

                <input
                    type="file"
                    accept=".pdf"
                    multiple
                    className="hidden"
                    onChange={handleChange}
                />

            </label>

            {files.length > 0 && (

                <div className="mt-6">

                    <div
                        className="
                        mb-4
                        rounded-xl
                        bg-cyan-500/10
                        px-4
                        py-3
                        text-cyan-300
                        font-medium
                        "
                    >
                        {files.length} Resume(s) Selected
                    </div>

                    <div className="space-y-3">

                        {files.map(
                            (
                                file,
                                index
                            ) => (

                                <div
                                    key={`${file.name}-${index}`}
                                    className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    border-cyan-500/10
                                    bg-cyan-500/5
                                    px-4
                                    py-3
                                    "
                                >

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        "
                                    >

                                        <FileText
                                            size={20}
                                            className="
                                            text-cyan-400
                                            "
                                        />

                                        <div>

                                            <p
                                                className="
                                                text-white
                                                "
                                            >
                                                {file.name}
                                            </p>

                                            <p
                                                className="
                                                text-sm
                                                text-gray-400
                                                "
                                            >
                                                {(
                                                    file.size /
                                                    1024 /
                                                    1024
                                                ).toFixed(
                                                    2
                                                )}
                                                MB
                                            </p>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() =>
                                            removeFile(
                                                index
                                            )
                                        }
                                        className="
                                        rounded-lg
                                        bg-red-500/10
                                        p-2
                                        text-red-400
                                        transition
                                        hover:bg-red-500/20
                                        "
                                    >
                                        <Trash2
                                            size={18}
                                        />
                                    </button>

                                </div>

                            )
                        )}

                    </div>

                </div>

            )}

        </div>
    );
}