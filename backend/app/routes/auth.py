from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.user import UserCreate, UserLogin
from app.services.auth_service import register_user, login_user
from app.utils.security import create_token

router = APIRouter()

@router.post("/signup")
def signup(data: UserCreate, db: Session = Depends(get_db)):
    return register_user(db, data)

@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = login_user(db, data)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token({"user_id": user.id})
    return {"access_token": token}
