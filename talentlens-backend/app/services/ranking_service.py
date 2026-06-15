def rank_candidates(candidates):

    return sorted(
        candidates,
        key=lambda x: x["final_score"],
        reverse=True
    )

