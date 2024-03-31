#customerModel.py
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from models.dbconfig import db

class Customer(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    mobile_number = db.Column(db.String(20), nullable=False)
    order_date = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'mobile_number': self.mobile_number,
            'order_date': self.order_date.strftime('%Y-%m-%d %H:%M:%S')  # convert datetime to string
        }
