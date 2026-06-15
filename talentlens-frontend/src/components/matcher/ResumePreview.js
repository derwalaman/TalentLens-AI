"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
    ZoomIn,
    ZoomOut,
    ChevronLeft,
    ChevronRight,
    FileText,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumePreview({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.1);

    if (!file) return null;

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <FileText className="text-violet-400" />

                    <h2 className="text-2xl font-bold">
                        Resume Preview
                    </h2>

                </div>

                <div className="flex items-center gap-3">

                    <button
                        onClick={() =>
                            setScale((prev) =>
                                Math.max(0.8, prev - 0.1)
                            )
                        }
                        className="rounded-lg border border-white/10 p-2 hover:bg-white/10"
                    >
                        <ZoomOut size={18} />
                    </button>

                    <button
                        onClick={() =>
                            setScale((prev) =>
                                Math.min(2, prev + 0.1)
                            )
                        }
                        className="rounded-lg border border-white/10 p-2 hover:bg-white/10"
                    >
                        <ZoomIn size={18} />
                    </button>

                </div>
            </div>

            <div className="overflow-auto rounded-2xl bg-black/40 p-6">

                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="py-10 text-center text-gray-400">
                            Loading Resume...
                        </div>
                    }
                >
                    <div className="flex justify-center">
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                        />
                    </div>
                </Document>

            </div>

            {numPages > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4">

                    <button
                        disabled={pageNumber <= 1}
                        onClick={() =>
                            setPageNumber((prev) => prev - 1)
                        }
                        className="rounded-lg border border-white/10 p-2 disabled:opacity-40"
                    >
                        <ChevronLeft />
                    </button>

                    <span className="text-gray-400">
                        Page {pageNumber} of {numPages}
                    </span>

                    <button
                        disabled={pageNumber >= numPages}
                        onClick={() =>
                            setPageNumber((prev) => prev + 1)
                        }
                        className="rounded-lg border border-white/10 p-2 disabled:opacity-40"
                    >
                        <ChevronRight />
                    </button>

                </div>
            )}
        </div>
    );
}