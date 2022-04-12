
from itertools import product
from pydoc import describe

from flask import Flask,request
from flask_restx import Api,Resource,fields
from config import DevConfig
from model import Products
from exts import db




app=Flask(__name__)
app.config.from_object(DevConfig)

db.init_app(app)
api=Api(app,doc='/docs')


#model serializer interma of json
product_model=api.model(
    "Product",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "description":fields.String()

    }
)

@api.route('/hello')
class Hello(Resource):
    def get(self):
        return{"message":"ermi"}





@api.route('/products')
class ProductsResource(Resource):
    @api.marshal_list_with(product_model)
    def get(self):
        """Get all products"""
        products= Products.query_all()

        return products

    @api.marshal_list_with(product_model)   
    def post(self):
        """new products"""
        data=request.get_json()
        new_product=Products(
            title=data.get('title'),
            description=data.get('description')
        )

        new_product.save()
        return new_product,201

    



@api.route('/products/<int:id>')
class ProductsResoure(Resource):
    
    @api.marshal_list_with(product_model)   
    def get(self,id):
        """Get product by an id"""
        
        product=Products.query.get_or_404(id)

        return product

    @api.marshal_list_with(product_model)
    def put(self,id):
        """update a product by id"""
        product_to_update=Products.query.get_or_404(id)
        data=request.get_json()
        product_to_update.update(data.get('title'),data.get('description'))
        return product_to_update

        
    @api.marshal_list_with(product_model)   
    def delete(self,id):
        """Delete product"""
        product_to_delete=Products.query.get_or_404(id)
        product_to_delete.delete()
        return product_to_delete
        



@app.shell_context_processor
def make_shell_context():
    return {
        "db":db,
        "Products":Products
    } 


           


if __name__ == '__main__':
    app.run()
