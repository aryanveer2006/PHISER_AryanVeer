from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.campaign import Campaign
from app.schemas.campaign import CampaignCreate

router = APIRouter()

@router.post("/")
def create_campaign(data: CampaignCreate, db: Session = Depends(get_db)):
    campaign = Campaign(**data.dict(), brand_id=1)
    db.add(campaign)
    db.commit()
    return campaign

@router.get("/")
def get_campaigns(db: Session = Depends(get_db)):
    return db.query(Campaign).all()