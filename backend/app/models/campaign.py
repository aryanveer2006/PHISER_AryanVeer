from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    budget = Column(Integer)

    brand_id = Column(Integer, ForeignKey("users.id"))