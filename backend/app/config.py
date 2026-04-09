import os

PROJECT_NAME = "PHISER_AryanVeer"

SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 2

# Optional rename DB
DATABASE_URL = "sqlite:///./phiser_aryanveer.db"