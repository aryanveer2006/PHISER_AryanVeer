def recommend(campaign, influencers):
    results = []

    for inf in influencers:
        score = 0

        if inf.niche and inf.niche.lower() in campaign.description.lower():
            score += 10

        score += (inf.followers or 0) // 1000

        results.append({"name": inf.name, "score": score})

    return sorted(results, key=lambda x: x["score"], reverse=True)