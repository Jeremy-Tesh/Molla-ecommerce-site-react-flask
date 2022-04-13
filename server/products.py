from flask_restx import Namespace,Resource,fields
from flask import request
from model import Products
from flask_jwt_extended import jwt_required



product_ns=Namespace('product',description="A namespace for products")


#model serializer interma of json
product_model=product_ns.model(
    "Product",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "description":fields.String()

    }
)



@product_ns.route('/hello')
class Hello(Resource):
    def get(self):
        return {"message":"Hello"}       


@product_ns.route('/products')
class ProductsResource(Resource):
    @product_ns.marshal_list_with(product_model)
    def get(self):
        """Get all products"""
        products= Products.query.all()

        return products



    @product_ns.marshal_list_with(product_model)   
    @product_ns.expect(product_model)
    @jwt_required()
    def post(self):
        """new products"""
        data=request.get_json()
        new_product=Products(
            title=data.get('title'),
            description=data.get('description')
        )

        new_product.save()
        return new_product,201

    



@product_ns.route('/products/<int:id>')
class ProductsResoure(Resource):
    
    @product_ns.marshal_list_with(product_model)   
    def get(self,id):
        """Get product by an id"""
        
        product=Products.query.get_or_404(id)

        return product

    @product_ns.marshal_list_with(product_model)

    @jwt_required()
    def put(self,id):
        """update a product by id"""
        product_to_update=Products.query.get_or_404(id)
        data=request.get_json()
        product_to_update.update(data.get('title'),data.get('description'))
        return product_to_update

        
    @product_ns.marshal_list_with(product_model)
    @jwt_required()   
    def delete(self,id):
        """Delete product"""
        product_to_delete=Products.query.get_or_404(id)
        product_to_delete.delete()
        return product_to_delete
        
