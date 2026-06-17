"use client";

import { Upload, FileText, Sparkles } from "lucide-react";

export default function ResumeUploader({
    file,
    setFile,
}) {

    const handleChange = (e) => {
        const selected = e.target.files?.[0];

        if (selected) {
            setFile(selected);
        }
    };

    return (

        <div
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute
                    -top-24
                    -left-24
                    h-60
                    w-60
                    rounded-full
                    bg-violet-600/10
                    blur-[100px]
                "
            />

            <div className="relative z-10">

                {/* Header */}

                <div className="mb-6">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-violet-500/20
                            bg-violet-500/10
                            px-3
                            py-1.5
                            text-xs
                            text-violet-300
                        "
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        Resume Upload
                    </div>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            font-bold
                        "
                    >
                        Upload Candidate Resume
                    </h2>

                    <p
                        className="
                            mt-2
                            text-gray-400
                        "
                    >
                        Upload a PDF resume and let AI extract
                        skills, experience, education and projects.
                    </p>

                </div>

                {/* Upload Zone */}

                <label
                    className="
                        group
                        flex
                        min-h-[340px]
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-[28px]
                        border-2
                        border-dashed
                        border-violet-500/25
                        bg-gradient-to-br
                        from-violet-500/5
                        via-transparent
                        to-cyan-500/5
                        p-8
                        text-center
                        transition-all
                        duration-300
                        hover:border-violet-400/60
                        hover:bg-white/[0.03]
                    "
                >

                    <div
                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-3xl
                            bg-gradient-to-br
                            from-violet-500/20
                            to-cyan-500/20
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >

                        <Upload
                            size={36}
                            className="text-violet-400"
                        />

                    </div>

                    <h3
                        className="
                            mt-6
                            text-2xl
                            font-bold
                        "
                    >
                        Drop Resume Here
                    </h3>

                    <p
                        className="
                            mt-3
                            text-gray-400
                        "
                    >
                        Drag & drop your PDF file
                        <br />
                        or click to browse
                    </p>

                    <span
                        className="
                            mt-4
                            rounded-full
                            bg-white/5
                            px-4
                            py-2
                            text-xs
                            text-gray-500
                        "
                    >
                        PDF • Max 10MB
                    </span>

                    {file && (

                        <div
                            className="
                                mt-8
                                flex
                                w-full
                                max-w-md
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                p-4
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
                                    bg-emerald-500/20
                                "
                            >

                                <FileText
                                    size={22}
                                    className="text-emerald-400"
                                />

                            </div>

                            <div className="flex-1 text-left">

                                <p
                                    className="
                                        truncate
                                        font-semibold
                                        text-white
                                    "
                                >
                                    {file.name}
                                </p>

                                <p
                                    className="
                                        text-xs
                                        text-emerald-300
                                    "
                                >
                                    {(file.size / 1024 / 1024).toFixed(2)}
                                    MB Uploaded
                                </p>

                            </div>

                        </div>

                    )}

                    <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleChange}
                    />

                </label>

            </div>

        </div>

    );

}