from fastapi import FastAPI
from app.database import Base, engine

from app.routes import auth, user, campaign, application, recommendation

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Collabify API")

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(campaign.router, prefix="/campaigns", tags=["Campaigns"])
app.include_router(application.router, prefix="/applications", tags=["Applications"])
app.include_router(recommendation.router, prefix="/recommend", tags=["AI"])

@app.get("/")
def root():
    return {"message": "Collabify API running 🚀"}