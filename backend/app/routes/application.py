from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.application import Application
from app.schemas.application import ApplicationCreate

router = APIRouter()

@router.post("/")
def apply(data: ApplicationCreate, db: Session = Depends(get_db)):
    app = Application(**data.dict())
    db.add(app)
    db.commit()
    return app