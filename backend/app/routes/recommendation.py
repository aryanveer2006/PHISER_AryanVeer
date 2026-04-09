from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.user import User
from app.models.campaign import Campaign
from app.services.recommendation_service import recommend

router = APIRouter()

@router.get("/{campaign_id}")
def get_recommendation(campaign_id: int, db: Session = Depends(get_db)):
    campaign = db.query(Campaign).get(campaign_id)
    influencers = db.query(User).filter(User.role == "influencer").all()

    return recommend(campaign, influencers)