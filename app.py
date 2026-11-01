from flask import Flask,request, jsonify
from flask_cors import CORS
from flask_jwt_extended import ( 
        JWTManager, create_access_token, jwt_required, get_jwt_identity 
)
from config import Config
from model import db, Seller, Buyer

app=Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
jwt=JWTManager(app)
CORS(app)

with app.app_context():
    db.create_all()


#{*/"seller regustration*/"}
@app.route("/api/register/seller",methods=["POST"])
def register_seller():
    data=request.get_json()

    required=["Full_Name","mobile_number","email_ID","AADHAR","state","district","mandi","mukhya_fasal","password"]
    missing=[f for f in required if not data.get(f)]
    if missing:
        return jsonify({"error":f"Missing fields: {', '.join(missing)}"}),400
    if Seller.query.filter_by(email_ID=data["email_ID"]).first():
        return jsonify({"error":"Email already exists"}),409
    if Seller.query.filter_by(mobile_number=data["mobile_number"]).first():
        return jsonify({"error":"Mobile number already exists"}),409

    seller=Seller(
        Full_Name=data["Full_Name"],
        mobile_number=data["mobile_number"],
        email_ID=data["email_ID"],
        AADHAR=data["AADHAR"],
        state=data["state"],
        district=data["district"],
        mandi=data["mandi"],
        mukhya_fasal=data["mukhya_fasal"],
        
    )
    seller.set_password(data["password"])
    db.session.add(seller)
    db.session.commit()
    return jsonify({"message":"registration done",
                    "user":seller.to_dict()}),201

#{"*/"Login*/seller"}
@app.route("/api/login",methods=["POST"])
def login():
    data=request.get_json()
    email=data.get("email_ID")
    password=data.get("password")
    user=Seller.query.filter_by(email_ID=email).first()
    if not user or not user.check_password(password):
        return jsonify({"error":"Invalid email or password"}),401
    token=create_access_token(identity=str(user.ID))
    return jsonify({
        "message":"Login successful",
        "access_token":token,
        "user":user.to_dict()
    }),200


@app.route("/api/profile",methods=["GET"])
@jwt_required()
def profile():
    user_id=get_jwt_identity()
    user=Seller.query.get(user_id)
    if not user:
        return jsonify({"error":"User not found"}),404
    return jsonify({"user":user.to_dict()}),200



#{*/"buyer regustration*/"}
@app.route("/api/register/buyer",methods=["POST"])
def register_buyer():
    data=request.get_json()

    required=["Full_Name","AADHAR","mobile_number","email_ID","state","district","businesses_name","galla_mandi","mukhya_fasal","password"]
    missing=[f for f in required if not data.get(f)]
    if missing:
        return jsonify({"error":f"Missing fields: {', '.join(missing)}"}),400
    if Buyer.query.filter_by(email_ID=data["email_ID"]).first():
        return jsonify({"error":"Email already exists"}),409
    if Buyer.query.filter_by(mobile_number=data["mobile_number"]).first():
        return jsonify({"error":"Mobile number already exists"}),409
    buyer=Buyer(
        Full_Name=data["Full_Name"],
        mobile_number=data["mobile_number"],
        email_ID=data["email_ID"],
        AADHAR=data["AADHAR"],
        state=data["state"],
        district=data["district"],
        businesses_name=data["businesses_name"],
        galla_mandi=data["galla_mandi"],
        mukhya_fasal=data["mukhya_fasal"],
        
    )
    buyer.set_password(data["password"])
    db.session.add(buyer)
    db.session.commit()
    return jsonify({"message":"registration done",
                    "user":buyer.to_dict()}),201



#{*/"login/buyer*/"}
@app.route("/api/login/buyer",methods=["POST"])
def buyer_login():
    data=request.get_json()
    email=data.get("email_ID")
    password=data.get("password")
    user=Buyer.query.filter_by(email_ID=email).first()
    if not user or not user.check_password(password):
        return jsonify({"error":"Invalid email or password"}),401
    token=create_access_token(identity=str(user.ID))
    return jsonify({
        "message":"Login successful",
        "access_token":token,
        "user":user.to_dict()
    }),200
@app.route("/api/profile/buyer",methods=["GET"])
@jwt_required()
def buyer_profile():
    user_id=get_jwt_identity()
    user=Buyer.query.get(user_id)
    if not user:
        return jsonify({"error":"User not found"}),404
    return jsonify({"user":user.to_dict()}),200


#{"*/"forgot password for seller*/"}
@app.route("/api/forgot-password", methods=["POST"])
def forgot_password():
    data = request.get_json()
    email = data.get("email_ID")
    new_password = data.get("new_password")

    if not email or not new_password:
        return jsonify({"error": "Email aur naya password dono zaroori hain"}), 400

    seller = Seller.query.filter_by(email_ID=email).first()
    if not seller:
        return jsonify({"error": "Is email se koi account nahi mila"}), 404

    seller.set_password(new_password)
    db.session.commit()

    return jsonify({"message": "Password successfully change ho gaya"}), 200

#{*/"forgot password for buyer*/"}
@app.route("/api/forgot-password/buyer", methods=["POST"])
def forgot_password_buyer():
    data = request.get_json()
    email = data.get("email_ID")
    new_password = data.get("new_password")

    if not email or not new_password:
        return jsonify({"error": "Email aur naya password dono zaroori hain"}), 400

    buyer = Buyer.query.filter_by(email_ID=email).first()
    if not buyer:
        return jsonify({"error": "Is email se koi account nahi mila"}), 404

    buyer.set_password(new_password)
    db.session.commit()

    return jsonify({"message": "Password successfully change ho gaya"}), 200

if __name__=="__main__":
    app.run(debug=True,port=5000)
