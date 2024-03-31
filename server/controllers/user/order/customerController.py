#customercontroller.py
from flask import request, json  # Add json here
from flask_restful import Resource
from models.customerModel import Customer
from models.orderHistoryModel import OrderHistory  # Add this line
from models.dbconfig import db
from datetime import datetime

class CustomerController(Resource):
    def post(self):
        customer_data = request.get_json()

        # Check if a customer with the same details already exists
        existing_customer = Customer.query.filter_by(name=customer_data['customerName'], mobile_number=customer_data['customerMobile']).first()
        if existing_customer:
            # If the customer exists, return a message without creating a new entry
            return {'message': 'A customer with these details already exists'}, 400

        # If the customer does not exist, proceed to create a new entry
        try:
            order_date = datetime.strptime(customer_data['orderDate'], '%d.%m.%Y')
            new_customer = Customer(
                name=customer_data['customerName'],
                mobile_number=customer_data['customerMobile'],
                order_date=order_date
            )
            db.session.add(new_customer)
            db.session.commit()
            return new_customer.to_dict(), 201
        except Exception as error:
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

    def get(self, customer_id=None):
        print(f"Received GET request for customer_id: {customer_id}")  # Log the received customer_id
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
            print(f"Error in GET /api/customer/{customer_id}: {str(error)}")
            return {
                'error': str(error),
                'message': 'Internal Server Error',
                'statusCode': 500
            }
