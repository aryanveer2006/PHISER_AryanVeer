from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models

router = APIRouter()

@router.post("/register")
def register(name: str, email: str, password: str, role: str, db: Session = Depends(SessionLocal)):
    user = models.User(name=name, email=email, password=password, role=role)
    db.add(user)
    db.commit()
    return {"msg": "User created"}