import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    # JWT Settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecretkey")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./collabify.db")

settings = Settings()