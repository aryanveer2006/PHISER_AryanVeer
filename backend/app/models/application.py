from sqlalchemy import Column, Integer
from app.database import Base

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)
    campaign_id = Column(Integer)
    influencer_id = Column(Integer)
    status = Column(Integer, default=0)  # 0=pending,1=accepted
