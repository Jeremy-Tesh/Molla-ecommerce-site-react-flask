from exts import db


"""
class Products:
    id:int primary key
    title:str
    description:str (text)

"""

class Products(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String(),nullable=False)
    description=db.Column(db.Text(),nullable=False)


    def __repr__(self):
        return f"<Products {self.title} >"


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self,title,description):
        self.title=title 
        self.description=description
        db.session.commit()