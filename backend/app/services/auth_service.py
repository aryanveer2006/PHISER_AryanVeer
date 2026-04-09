from sqlalchemy.orm import Session
from app.models.user import User
from app.utils.hashing import hash_password, verify_password

def register_user(db: Session, data):
    user = User(
        name=data.name,
        email=data.email,
        password=hash_password(data.password),
        role=data.role
    )
    db.add(user)
    db.commit()
    return user

def login_user(db: Session, data):
    user = db.query(User).filter(User.email == data.email).first()

    if not user or not verify_password(data.password, user.password):
        return None

    return user
