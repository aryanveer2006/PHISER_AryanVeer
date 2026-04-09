from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

# Import routes
from app.routes import auth, user, campaign, application, recommendation

app = FastAPI(title="PHISER_AryanVeer API 🚀")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create DB tables
Base.metadata.create_all(bind=engine)

# Include routers (ONLY HERE)
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(campaign.router, prefix="/campaigns", tags=["Campaigns"])
app.include_router(application.router, prefix="/applications", tags=["Applications"])
app.include_router(recommendation.router, prefix="/recommend", tags=["AI"])

@app.get("/")
def home():
    return {"message": "PHISER_AryanVeer Backend Running 🚀"}

@app.get("/health")
def health():
    return {"status": "ok"}