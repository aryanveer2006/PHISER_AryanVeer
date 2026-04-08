@router.post("/campaign")
def create_campaign(title: str, description: str, budget: int, brand_id: int, db: Session = Depends(SessionLocal)):
    campaign = models.Campaign(
        title=title,
        description=description,
        budget=budget,
        brand_id=brand_id
    )
    db.add(campaign)
    db.commit()
    return {"msg": "Campaign created"}