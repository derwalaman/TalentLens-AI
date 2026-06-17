"use client";

import {
    Upload,
    FileText,
} from "lucide-react";

export default function ResumeCompareUploader({
    title,
    file,
    setFile,
    color = "violet",
}) {

    const themes = {
        violet: {
            border:
                "border-violet-500/30",
            glow:
                "hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]",
            icon:
                "text-violet-400",
            bg:
                "from-violet-500/5 to-fuchsia-500/5",
        },

        cyan: {
            border:
                "border-cyan-500/30",
            glow:
                "hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
            icon:
                "text-cyan-400",
            bg:
                "from-cyan-500/5 to-blue-500/5",
        },
    };

    const theme =
        themes[color];

    const handleChange = (
        e
    ) => {

        const selected =
            e.target.files?.[0];

        if (selected) {
            setFile(selected);
        }
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

            <h2
                className="
                    mb-5
                    text-2xl
                    font-bold
                "
            >
                {title}
            </h2>

            <label
                className={`
                    group
                    flex
                    h-[340px]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-[28px]
                    border-2
                    border-dashed
                    ${theme.border}
                    bg-gradient-to-br
                    ${theme.bg}
                    transition-all
                    duration-300
                    ${theme.glow}
                `}
            >

                <Upload
                    size={60}
                    className={`
                        mb-4
                        ${theme.icon}
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    `}
                />

                <h3
                    className="
                        text-xl
                        font-semibold
                    "
                >
                    Upload PDF Resume
                </h3>

                <p
                    className="
                        mt-2
                        text-gray-400
                    "
                >
                    Drag & Drop or Click
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

                {file && (

                    <div
                        className="
                            mt-6
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-green-500/20
                            px-5
                            py-3
                            text-green-300
                        "
                    >

                        <FileText
                            size={20}
                        />

                        <div>

                            <p
                                className="
                                    font-medium
                                "
                            >
                                {file.name}
                            </p>

                            <p
                                className="
                                    text-xs
                                "
                            >
                                {(
                                    file.size /
                                    1024 /
                                    1024
                                ).toFixed(
                                    2
                                )}{" "}
                                MB
                            </p>

                        </div>

                    </div>

                )}

                <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={
                        handleChange
                    }
                />

            </label>

        </div>

    );
}