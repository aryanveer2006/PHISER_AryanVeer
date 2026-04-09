from pydantic import BaseModel

class CampaignCreate(BaseModel):
    title: str
    description: str
    budget: int
    platform: str

class CampaignOut(CampaignCreate):
    id: int

    class Config:
        orm_mode = True