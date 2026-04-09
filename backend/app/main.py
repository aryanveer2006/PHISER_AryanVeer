from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes import auth, user, campaign, recommendation

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="PHISER_AryanVeer API 🚀")

# ✅ CORS (important for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router)
app.include_router(user.router)
app.include_router(campaign.router)
app.include_router(recommendation.router)

@app.get("/")
def home():
    return {"message": "PHISER_AryanVeer Backend Running 🚀"}