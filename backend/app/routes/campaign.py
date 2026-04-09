from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

# Import all route files
from app.routes import auth, user, campaign, application, recommendation

# Create FastAPI app
app = FastAPI(
    title="PHISER_AryanVeer API 🚀",
    version="1.0.0"
)

# ✅ CORS (IMPORTANT for frontend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔥 Change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Create database tables on startup
Base.metadata.create_all(bind=engine)

# ✅ Include all routes
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(campaign.router, prefix="/campaigns", tags=["Campaigns"])
app.include_router(application.router, prefix="/applications", tags=["Applications"])
app.include_router(recommendation.router, prefix="/recommend", tags=["AI"])

# ✅ Root route
@app.get("/")
def home():
    return {
        "message": "PHISER_AryanVeer Backend Running 🚀"
    }

# ✅ Health check (important for Render)
@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }