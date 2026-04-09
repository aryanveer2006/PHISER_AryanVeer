from fastapi import FastAPI
from app.database import Base, engine

# Import routes
from app.routes import auth, user, campaign, application, recommendation

# Create tables
Base.metadata.create_all(bind=engine)

# Initialize app
app = FastAPI(
    title="Collabify API",
    description="Micro-Influencer Brand Collaboration Hub",
    version="1.0.0"
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(campaign.router, prefix="/campaigns", tags=["Campaigns"])
app.include_router(application.router, prefix="/applications", tags=["Applications"])
app.include_router(recommendation.router, prefix="/recommend", tags=["AI"])

# Root endpoint
@app.get("/")
def root():
    return {"message": "🚀 Collabify API is running"}