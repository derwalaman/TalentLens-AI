"use client";

import { Upload, FileText } from "lucide-react";

export default function ResumeUploader({
    file,
    setFile,
}) {
    const handleChange = (e) => {
        const selected = e.target.files[0];

        if (selected) {
            setFile(selected);
        }
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h2 className="mb-4 text-2xl font-semibold">
                Upload Resume
            </h2>

            <label className="group flex h-80 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]">

                <Upload
                    size={60}
                    className="mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-110"
                />

                <p className="text-xl font-semibold">
                    Upload Resume PDF
                </p>

                <p className="mt-2 text-gray-400">
                    Drag & Drop or Click to Browse
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    PDF files only
                </p>

                {file && (
                    <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-500/20 px-5 py-3 text-green-300">

                        <FileText size={20} />

                        <div>

                            <p className="font-medium">
                                {file.name}
                            </p>

                            <p className="text-xs text-green-200">
                                {(file.size / 1024 / 1024).toFixed(2)}
                                MB
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
    );
}