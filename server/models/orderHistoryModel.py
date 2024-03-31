#orderHistoryModel.py
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from models.dbconfig import db
import json

class OrderHistory(db.Model):
    __tablename__ = 'order_history'

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    payment_mode = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    order_details = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'customer_id': self.customer_id,
            'date': self.date.strftime('%Y-%m-%d %H:%M:%S'),  # convert datetime to string
            'payment_mode': self.payment_mode,
            'amount': self.amount,
            'order_details': json.loads(self.order_details)  # Convert string back to list of dictionaries
        }

