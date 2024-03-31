#customercontroller.py
from flask import request, json  # Add json here
from flask_restful import Resource
from models.customerModel import Customer
from models.orderHistoryModel import OrderHistory  # Add this line
from models.dbconfig import db
from datetime import datetime

class CustomerController(Resource):
    def post(self):
        print(f"Request headers: {request.headers}")  # Log the request headers
        print(f"Request body: {request.get_data(as_text=True)}")  # Log the request body

        customer_data = request.get_json()
        print(f"Received customer data: {customer_data}")  # Log the received data

        try:
            # Convert order_date string to datetime
            order_date = datetime.strptime(customer_data['orderDate'], '%d.%m.%Y')  # Change the format here
            print(f"Parsed order_date: {order_date}")  # Log the parsed date

            new_customer = Customer(
                name=customer_data['customerName'],
                mobile_number=customer_data['customerMobile'],
                order_date=order_date
            )
            db.session.add(new_customer)
            db.session.commit()
            print(f"Saved customer ID: {new_customer.id}")
            return new_customer.to_dict(), 201
        except Exception as error:
            print(f"Error: {str(error)}")
            return {
                'error': str(error),
                'message': 'Internal Server Error',
                'statusCode': 500
            }


    def get(self, customer_id=None):
        try:
            if customer_id is None:
                # No customer_id provided, return all customers
                customers = Customer.query.all()
                return [customer.to_dict() for customer in customers], 200
            else:
                # customer_id provided, return that customer
                customer = Customer.query.get(customer_id)
                if not customer:
                    return {'message': 'Customer not found'}, 404

                return customer.to_dict(), 200  # Return the customer's details
        except Exception as error:
            return {
                'error': str(error),
                'message': 'Internal Server Error',
                'statusCode': 500
            }
