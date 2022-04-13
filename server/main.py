
from flask_migrate import Migrate
from products import product_ns
from auth import auth_ns
from flask import Flask
from flask_restx import Api
from model import Products,User
from exts import db
from flask_jwt_extended import JWTManager



def create_app(config):
    app=Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)

    migrate= Migrate(app,db)
    JWTManager(app)
  
    api=Api(app,doc='/docs')

    api.add_namespace(product_ns)
    api.add_namespace(auth_ns)




    @app.shell_context_processor
    def make_shell_context():
        return {
        "db":db,
        "Products":Products,
        "User":User
        } 


            


    return app
