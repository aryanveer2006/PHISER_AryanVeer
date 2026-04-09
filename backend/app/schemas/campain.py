from pydantic import BaseModel

class CampaignCreate(BaseModel):
    title: str
    description: str
    budget: int