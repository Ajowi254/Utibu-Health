#orderhistorycontroller.py
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
                # Check if 'date' is in order_data
                if 'date' in order_data:
                    # Convert date string to datetime
                    date = datetime.strptime(order_data['date'], '%Y-%m-%d %H:%M:%S')
                    print(f"Parsed date: {date}")  # Log the parsed date
                else:
                    # Use current date/time as default
                    date = datetime.now()

                # Check if 'payment_mode' is in order_data
                if 'payment_mode' in order_data:
                    payment_mode = order_data['payment_mode']
                else:
                    # Use a default value
                    payment_mode = 'default'

                # Check if 'amount' is in order_data
                if 'amount' in order_data:
                    amount = order_data['amount']
                else:
                    # Use a default value
                    amount = 0

                # Use the entire order_data as order_details
                order_details = json.dumps(order_data)

                new_order = OrderHistory(
                    customer_id=customer_id,  # Use the customer_id argument
                    date=date,  # Use the datetime object
                    payment_mode=payment_mode,
                    amount=amount,
                    order_details=order_details
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
