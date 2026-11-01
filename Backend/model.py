from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
db=SQLAlchemy()
class Seller(db.Model):
    __tablename__ ="seller"
    ID =db.Column (db.Integer,primary_key=True,autoincrement=True)
    Full_Name =db.Column(db.String(50),nullable=False)
    mobile_number =db.Column(db.String(50),nullable=False)
    email_ID =db.Column(db.String(50),nullable=False)
    AADHAR =db.Column(db.String(50),nullable=False)
    state =db.Column(db.String(50),nullable=False)
    district =db.Column(db.String(50),nullable=False)
    mandi=db.Column(db.String(50),nullable=False)
    mukhya_fasal =db.Column(db.String(50),nullable=False)
    password =db.Column("Password",db.String(500),nullable=False)
    created_at = db.Column(db.TIMESTAMP,default=datetime.utcnow)

    def set_password(self, password):
        self.password= generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return{
            "ID":self.ID,
            "Full_Name":self.Full_Name,
            "mobile_number":self.mobile_number,
            "email_ID":self.email_ID,
            "state":self.state,
            "district":self.district,
            "mandi":self.mandi,
            "mukhya_fasal":self.mukhya_fasal,
            
        }
    
    
class Buyer(db.Model):
    __tablename__ ="buyer"
    ID =db.Column (db.Integer,primary_key=True,autoincrement=True)
    Full_Name =db.Column(db.String(50),nullable=False)
    AADHAR =db.Column(db.String(50),nullable=False)
    mobile_number =db.Column(db.String(50),nullable=False)
    email_ID =db.Column(db.String(50),nullable=False)
    state =db.Column(db.String(50),nullable=False)
    district =db.Column(db.String(50),nullable=False)
    businesses_name=db.Column(db.String(50),nullable=False)
    galla_mandi=db.Column(db.String(50),nullable=False)
    mukhya_fasal =db.Column(db.String(50),nullable=False)
    password =db.Column("Password",db.String(500),nullable=False)
    created_at = db.Column(db.TIMESTAMP,default=datetime.utcnow)

    def set_password(self, password):
        self.password= generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return{
            "ID":self.ID,
            "Full_Name":self.Full_Name,
            "mobile_number":self.mobile_number,
            "email_ID":self.email_ID,
            "state":self.state,
            "district":self.district,
            "galla_mandi":self.galla_mandi,
            "mukhya_fasal":self.mukhya_fasal,
            "businesses_name":self.businesses_name
        }