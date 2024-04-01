# UTIBU HEALTH APP

## PROJECT OVERVIEW
Utibu Health is a healthcare facility that provides services to patients with chronic conditions such as HIV, diabetes, and hypertension. The facility has a pharmacy that manages an inventory system for medication items, customer orders, sales, invoices, and payments. The system runs on Microsoft SQL Server and a legacy desktop application developed in Delphi.

The goal of this project is to develop a mobile app that allows registered customers to order their medication remotely and check their statements. The app will integrate with the existing database and ensure that the legacy system continues to function for face-to-face sales.

## DELIVERABLES
1. **User Registration and Login**: A feature that allows customers to create an account and log in to access their information.
2. **Medication Ordering**: A feature that enables customers to order their medication through the app.
3. **Order Confirmation**: A feature that confirms the order to the client if it is successful, based on the level of stock in the pharmacy in the current database.
4. **Statement Checking**: A feature that allows customers to check their statements through the app.
5. **Payment Options**: A feature that allows the client to pay immediately or choose to pay later at the point of collection/receipt of their medication.
6. **Database Integration**: The mobile app should integrate with the existing Microsoft SQL Server database. The online orders made through the mobile app should appear in this database as well.
7. **Legacy System Maintenance**: The legacy desktop application developed in Delphi should continue to function for face-to-face sales.
8. **Internet Connectivity**: A secure method should be set up for the mobile app to communicate with the database. This could involve setting up a VPN, using a cloud database, or another suitable approach.

## SETTING UP THE APP
STRICTLY FLOW EVERY LISTED PROCESS
1. **Clone the Repository**:
    1. Clone the repository to your local machine using `git clone <repository-url>`.
    2. Navigate to the project directory with `cd <project-directory>`.

2. **Backend Setup**:
    1. Navigate to the server directory with `cd server`.
    2. Install the required packages with `pip install -r requirements.txt`.
    3. If you’re not the owner of the repo, delete the migrations and instance folders and generate your own database. This process includes installing flask-migrate with `pip install flask-migrate`.
    4. Navigate to the directory where your `app.py` file is located using the `cd` command.
    5. Initialize a new migration repository with `flask db init`.
    6. Create a new migration with `flask db migrate -m "Initial migration."`.
    7. Apply the migration to the database with `flask db upgrade`.
    8. Seed data with `python seed.py`.
    9. Run the app with `python app.py`. You should be redirected to port 5000.

3. **Frontend Setup**:
    1. Navigate back to the project directory and then to the client directory with `cd ../client`.
    2. Install the required packages with `npm install`.
    3. Start the app with `npm start`. The app will open to port 3000.

## FLOW OF THE APP

home page where user logs in if they are already registered and new users will have to sign in then after wards log in

after login is the home page 
here customer 




<img width="602" alt="SUCCESSFUL PAY" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/1946b2d8-06ab-4258-888b-64d6c46c8db7">
<img width="601" alt="USE DETAILS" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/0ecbc2db-e06c-4cc3-9a2e-ab4434b35ce5"> alt="CART" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/2e4d3126-a535-4e34-94c4-5e864a09d3e9">
<img width="596" alt="CHECK STATEMENT" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/bea94199-d8cf-41f7-8b10-f2352e9d430d">
<img width="594" alt="CHOOSE PAYMENT" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/c7422fb0-1b10-4cf2-916d-5c81152d416f">
<img width="595" alt="CVV" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/634209b1-6333-4e87-a269-2fe2ef93a0e6">
<img width="599" alt="INVOICE" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/4f7a4456-1870-4be1-a186-6b33b40b2656">
<img width="598" alt="LOGIN  " src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/9e2c118a-b86c-4bfd-9280-901018e03bf5">
<img width="676" alt="OTTP" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/6852f5d2-3dc0-4c0f-8337-5a4b036bc586">
<img width="595" alt="PLACE AN ORDER" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/0160dcb1-d0b4-4877-92f7-60513801958e">
<img width="598" alt="RAZORPAY" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/702631c5-7f3e-4d96-9a4c-3436d9641def">
<img width="601" alt="REGISTER" src="https://github.com/Ajowi254/Utibu-Health/assets/132816925/60cd5962-0415-4781-bd02-6163b14f0e8a">
