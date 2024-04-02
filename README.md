# UTIBU HEALTH APP

## PROJECT OVERVIEW
Utibu Health is a healthcare facility that provides services to patients with chronic conditions such as HIV, diabetes, and hypertension. The facility has a pharmacy that manages an inventory system for medication items, customer orders, sales, invoices, and payments. The system runs on Microsoft SQL Server and a legacy desktop application developed in Delphi.

The goal of this project is to develop a mobile app that allows registered customers to order their medication remotely and check their statements. The app will integrate with the existing database and ensure that the legacy system continues to function for face-to-face sales.

## DELIVERABLES
1. *User Registration and Login*: A feature that allows customers to create an account and log in to access their information.
2. *Medication Ordering*: A feature that enables customers to order their medication through the app.
3. *Order Confirmation*: A feature that confirms the order to the client if it is successful, based on the level of stock in the pharmacy in the current database.
4. *Statement Checking*: A feature that allows customers to check their statements through the app.
5. *Payment Options*: A feature that allows the client to pay immediately or choose to pay later at the point of collection/receipt of their medication.
6. *Database Integration*: The mobile app should integrate with the existing Microsoft SQL Server database. The online orders made through the mobile app should appear in this database as well.
7. *Legacy System Maintenance*: The legacy desktop application developed in Delphi should continue to function for face-to-face sales.
8. *Internet Connectivity*: A secure method should be set up for the mobile app to communicate with the database. This could involve setting up a VPN, using a cloud database, or another suitable approach.

## SETTING UP THE APP
STRICTLY FOLLOW EVERY LISTED PROCEDURE
1. *Clone the Repository*:
    1. Clone the repository to your local machine using git clone <repository-url>.
    2. Navigate to the project directory with cd <project-directory>.

2. *Backend Setup*:
    1. Navigate to the server directory with cd server.
    2. Install the required packages with pip install -r requirements.txt
    3. If you’re not the owner of the repo, delete the migrations and instance folders and generate your own database. This process includes installing flask-migrate with pip install flask-migrate
    4. Navigate to the directory where your app.py file is located using the cd command.
    5. Initialize a new migration repository with flask db init
    6. Create a new migration with flask db migrate -m "Initial migration."
    7. Apply the migration to the database with flask db upgrade
    8. Seed data with python seed.py
    9. Run the app with python app.py You should be redirected to port 5000.

3. *Frontend Setup*:
    1. Navigate back to the project directory and then to the client directory with cd ../client.
    2. Install the required packages with npm install.
    3. Start the app with npm start. The app will open to port 3000.

## FLOW OF THE APP
1. *Login Page*:
The user lands on the home page where they have the option to log in if they are already registered
<img width="598" alt="LOGIN  " src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/9e2c118a-b86c-4bfd-9280-901018e03bf5">


2 .*Registeration Page*:
New users will have to sign up and then log in.
<img width="601" alt="REGISTER" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/60cd5962-0415-4781-bd02-6163b14f0e8a">



3 .*Home Page*:
The user inputs their customer details and clicks save.They then choose the medication they want from the available options, are able to see available quantity in stock,input the quantity they want and add to cart.When in cart they have options to delete their items in cart
<img width="596" alt="CART" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/9d0ba3d3-7a3b-4e66-b052-953099d18422">




The total amount for the order is calculated based on the selected medications and quantities then the user chooses their payment method, which can be either online or offline.
<img width="594" alt="CHOOSE PAYMENT" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/c7422fb0-1b10-4cf2-916d-5c81152d416f">



4. *Offline payment*:
 If the user chooses offline payment, they can pay in person when they collect their medication. They will still receive an invoice for their order.
<img width="599" alt="INVOICE" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/4f7a4456-1870-4be1-a186-6b33b40b2656">


5. *Online payment*:
If the user chooses online payment, they are redirected to the card details they'd use for paying since the application is still in test mode .The details are:
Card Number : 4111 1111 1111 1111
expiry Date : 11/28
CVV : 123
OTTP Number : 1111
<img width="601" alt="USE DETAILS" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/0ecbc2db-e06c-4cc3-9a2e-ab4434b35ce5"> 


They are then redirected to Razorpay where they select card option and fill in the above details that was earlier shown .As for the name of the cardholder can input what they choose
<img width="595" alt="CVV" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/634209b1-6333-4e87-a269-2fe2ef93a0e6">


After that they are then redirected to a page they have to put an OTTP ...since its development phase/test mode the ottp is 1111
<img width="676" alt="OTTP" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/a01de4a9-6184-49b5-92c3-33376f4d186a">



After the payment is successful, they can choose to get an invoice or add their orders.
<img width="602" alt="SUCCESSFUL PAY" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/1946b2d8-06ab-4258-888b-64d6c46c8db7">

6. *Order History*: The user can navigate to the ‘My Orders’ page to see their past order history and statements.
<img width="596" alt="CHECK STATEMENT" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/bea94199-d8cf-41f7-8b10-f2352e9d430d">