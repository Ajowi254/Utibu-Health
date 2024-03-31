from flask import request
from flask_restful import Resource
from models.orderHistoryModel import OrderHistory
from models.dbconfig import db
from datetime import datetime
import json

class OrderHistoryController(Resource):
    def post(self, customer_id):  # Add customer_id as an argument
        order_data_list = request.get_json()
        print(f"Received order data for customer {customer_id}: {order_data_list}")  # Log the received data
        try:
            for order_data in order_data_list['order']:
                new_order = OrderHistory(
                    customer_id=customer_id,  # Use the customer_id argument
                    date=datetime.now(),  # Use the current date/time
                    payment_mode=order_data['payment_mode'],
                    amount=order_data['amount'],
                    order_details=json.dumps(order_data)  # Convert order_data to JSON string
                )
                db.session.add(new_order)
            db.session.commit()

            print(f"Saved order: {new_order.to_dict()}")  # Log the saved order
            return {'message': 'Order details saved successfully'}, 200
        except Exception as error:
            print(f"Error: {str(error)}")  # Log the error
            return {
                'error': str(error),
                'message': 'Internal Server Error',
                'statusCode': 500
            }

    def get(self, customer_id):
        try:
            # Fetch the order history for the specified customer
            order_history = OrderHistory.query.filter_by(customer_id=customer_id).all()

            if not order_history:
                # No order history found for this customer
                return {'message': 'No order history found for this customer'}, 404

            # Convert the order history to a list of dictionaries
            order_history = [order.to_dict() for order in order_history]

            return order_history, 200
        except Exception as error:
            return {
                'error': str(error),
                'message': 'Internal Server Error',
                'statusCode': 500
            }
