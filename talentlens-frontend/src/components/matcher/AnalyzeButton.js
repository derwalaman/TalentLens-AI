export default function AnalyzeButton({
    loading,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 text-lg font-semibold transition hover:scale-105 disabled:opacity-50"
        >
            {loading
                ? "Generating AI Insights..."
                : "Analyze Resume"}
        </button>
    );
}