"use client";

import {
    Upload,
    FileText,
    Trash2,
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

        setFiles(
            (prevFiles) => {

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
            }
        );

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

            <div className="mb-6">

                <span
                    className="
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-4
                        py-2
                        text-sm
                        text-cyan-300
                    "
                >
                    Resume Collection
                </span>

                <h2
                    className="
                        mt-4
                        text-3xl
                        font-black
                    "
                >
                    Upload Multiple Resumes
                </h2>

                <p
                    className="
                        mt-2
                        text-gray-400
                    "
                >
                    Upload multiple candidate resumes
                    and let AI rank them against
                    your job description.
                </p>

            </div>

            {/* Upload Zone */}

            <label
                className="
                    group
                    flex
                    h-80
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border-2
                    border-dashed
                    border-cyan-500/30
                    bg-gradient-to-br
                    from-cyan-500/5
                    to-violet-500/5
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                "
            >

                <Upload
                    size={60}
                    className="
                        mb-5
                        text-cyan-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                />

                <p
                    className="
                        text-xl
                        font-semibold
                    "
                >
                    Upload Resume PDFs
                </p>

                <p
                    className="
                        mt-2
                        text-gray-400
                    "
                >
                    Select one or multiple resumes
                </p>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                    "
                >
                    PDF files only
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

            {/* Selected Files */}

            {files.length > 0 && (

                <div className="mt-8">

                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div
                            className="
                                rounded-xl
                                border
                                border-cyan-500/20
                                bg-cyan-500/10
                                px-4
                                py-2
                                text-cyan-300
                                font-medium
                            "
                        >
                            {files.length}
                            {" "}
                            Resume(s)
                            Selected
                        </div>

                        <div
                            className="
                                text-sm
                                text-gray-500
                            "
                        >
                            Ready for ranking
                        </div>

                    </div>

                    <div
                        className="
                            max-h-[320px]
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
                                        bg-white/[0.04]
                                        p-4
                                        transition
                                        hover:bg-white/[0.07]
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
                                            "
                                        >

                                            <FileText
                                                size={22}
                                                className="
                                                    text-cyan-400
                                                "
                                            />

                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    font-medium
                                                    text-white
                                                    break-all
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
                                                {" "}
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
                                            bg-red-500/10
                                            p-2.5
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