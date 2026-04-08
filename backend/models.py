from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    role = Column(String)  # influencer / brand

class Campaign(Base):
    __tablename__ = "campaigns"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    budget = Column(Integer)
    brand_id = Column(Integer, ForeignKey("users.id"))

class Application(Base):
    __tablename__ = "applications"
    id = Column(Integer, primary_key=True)
    campaign_id = Column(Integer)
    influencer_id = Column(Integer)
    status = Column(String, default="pending")