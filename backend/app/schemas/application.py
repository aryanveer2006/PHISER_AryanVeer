from pydantic import BaseModel

class ApplicationCreate(BaseModel):
    campaign_id: int
    influencer_id: int