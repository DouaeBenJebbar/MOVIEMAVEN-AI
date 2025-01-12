import secrets
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from models import db

# Initialize Flask app
app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/auth_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = secrets.token_hex(32)

# Initialize extensions
CORS(app)
JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)

# Register blueprints
from routes.auth import auth_blueprint
app.register_blueprint(auth_blueprint, url_prefix='/api/auth')

if __name__ == "__main__":
    app.run(debug=True)
