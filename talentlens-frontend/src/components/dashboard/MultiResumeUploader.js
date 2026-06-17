"use client";

import {
    Upload,
    FileText,
    Trash2,
    Files,
    CheckCircle2,
} from "lucide-react";

export default function MultiResumeUploader({
    files,
    setFiles,
}) {

    const handleChange = (e) => {

        const newFiles =
            Array.from(
                e.target.files
            );

        setFiles((prevFiles) => {

            const existingNames =
                prevFiles.map(
                    (file) =>
                        file.name
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

        e.target.value = "";
    };

    const removeFile = (
        index
    ) => {

        setFiles(
            files.filter(
                (_, i) =>
                    i !== index
            )
        );

    };

    return (

        <div
            className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
            "
        >

            {/* Header */}

            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-3xl
                            font-black
                        "
                    >
                        Resume Upload
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Upload multiple resumes
                        for AI ranking and analysis.
                    </p>

                </div>

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-cyan-500/10
                        text-cyan-400
                    "
                >
                    <Files
                        className="
                            h-7
                            w-7
                        "
                    />
                </div>

            </div>

            {/* Upload Area */}

            <label
                className="
                    group
                    flex
                    h-72
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-[28px]
                    border-2
                    border-dashed
                    border-cyan-500/30
                    bg-gradient-to-b
                    from-cyan-500/5
                    to-transparent
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                "
            >

                <Upload
                    className="
                        mb-5
                        h-14
                        w-14
                        text-cyan-400
                        transition-transform
                        group-hover:scale-110
                    "
                />

                <h3
                    className="
                        text-2xl
                        font-bold
                    "
                >
                    Upload PDF Resumes
                </h3>

                <p
                    className="
                        mt-2
                        text-gray-400
                    "
                >
                    Drag & drop or click
                    to browse files
                </p>

                <input
                    type="file"
                    accept=".pdf"
                    multiple
                    className="hidden"
                    onChange={
                        handleChange
                    }
                />

            </label>

            {/* Counter */}

            {files.length > 0 && (

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-green-500/20
                        bg-green-500/10
                        px-5
                        py-4
                    "
                >

                    <CheckCircle2
                        className="
                            h-5
                            w-5
                            text-green-400
                        "
                    />

                    <span
                        className="
                            font-semibold
                            text-green-300
                        "
                    >
                        {files.length}
                        {" "}
                        resume(s) selected
                    </span>

                </div>

            )}

            {/* File List */}

            {files.length > 0 && (

                <div
                    className="
                        mt-6
                        max-h-[350px]
                        space-y-3
                        overflow-y-auto
                        pr-2
                    "
                >

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
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    px-5
                                    py-4
                                    transition
                                    hover:bg-white/[0.05]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-cyan-500/10
                                            text-cyan-400
                                        "
                                    >

                                        <FileText
                                            className="
                                                h-6
                                                w-6
                                            "
                                        />

                                    </div>

                                    <div>

                                        <p
                                            className="
                                                max-w-[260px]
                                                truncate
                                                font-medium
                                            "
                                        >
                                            {file.name}
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                text-gray-500
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
                                        rounded-xl
                                        border
                                        border-red-500/20
                                        bg-red-500/10
                                        p-3
                                        text-red-400
                                        transition
                                        hover:bg-red-500/20
                                    "
                                >

                                    <Trash2
                                        className="
                                            h-5
                                            w-5
                                        "
                                    />

                                </button>

                            </div>

                        )
                    )}

                </div>

            )}

        </div>

    );

}