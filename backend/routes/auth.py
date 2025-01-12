from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from sqlalchemy.exc import IntegrityError
from models import db, User

bcrypt = Bcrypt()
auth_blueprint = Blueprint('auth', __name__)

# Helper function to fetch a user by email
def get_user_by_email(email):
    return User.query.filter_by(email=email).first()

# Signup route
@auth_blueprint.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Input validation
    if not username or not email or not password:
        return jsonify({"message": "All fields are required"}), 400
    if len(password) < 8:
        return jsonify({"message": "Password must be at least 8 characters long"}), 400

    # Check if user already exists
    if get_user_by_email(email):
        return jsonify({"message": "Email already exists"}), 400

    try:
        # Hash the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Create a new user
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User created successfully"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Email already exists"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500

# Login route
@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Input validation
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    # Fetch user from the database
    user = get_user_by_email(email)
    if not user:
        return jsonify({"message": "User not found"}), 404

    # Check password
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Invalid password"}), 401

    # Generate JWT token
    access_token = create_access_token(identity=email)
    return jsonify({"message": "Login successful", "token": access_token}), 200

# Protected route (example)
@auth_blueprint.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Welcome {current_user}, this is a protected route"}), 200
