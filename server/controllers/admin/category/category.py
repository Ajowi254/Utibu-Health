#category.py
from flask import request
from flask_restful import Resource
from models.category import CategoryDetails

ROWS_PER_PAGE = 5

class category(Resource):
    def get(self):
        try:
            limit = request.args.get('limit', ROWS_PER_PAGE, type=int)
            offset = request.args.get('offset', 0, type=int)
            categories = CategoryDetails.query.limit(limit).offset(offset).all()
            return {'data': categories}, 200
        except Exception as error:
            return str(error), 500
