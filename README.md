## UTIBU HEALTH APP


## DELIVERABLES
Mobile App: Develop a mobile application that allows registered customers of Utibu Health to make orders for their medication and check their statement. The app should have the following features:
User Registration and Login
Medication Ordering
Order Confirmation based on stock availability
Statement Checking
Order Confirmation: Implement a feature in the mobile app that confirms the order to the client if it is successful, based on the level of stock in the pharmacy in the current database.
Payment Options: Implement a feature that allows the client to pay immediately or choose to pay later at the point of collection/receipt of their medication.
Database Integration: Integrate the mobile app with the existing Microsoft SQL Server database. The online orders made through the mobile app should appear in this database as well.
Legacy System Maintenance: Ensure that the legacy desktop application developed in Delphi continues to function for face-to-face sales.
Internet Connectivity: Since the health facility has reliable internet but does not have a public IP address, you may need to set up a secure method for the mobile app to communicate with the database. This could involve setting up a VPN, using a cloud database, or another suitable approach.

## SETTING UP THE APP
gitclone
1.backend 
navigate to server
npm install
generate the db 
in case of owner of repo the db is already generated and is located at instance
but if another party is accessing this app they have to delete the migrations and instance folders and generate own db .process includes,pip install flask-migrate

Navigate to the directory where your app.py file is located using the cd command.
type flask db init and press Enter. This will create a new migration repository.
flask db migrate -m "Initial migration."

 type flask db upgrade and press Enter. This will apply the migration to the database
 python seed.py to seed data
 python app.py you should be redirected to port 5000 
2.frontend
navigate to work and to begin navigate to client
pip install
npm start .the app will open to port 3000

## flow off the app
home page where user logs in if they are already registered and new users will have to sign in then after wards log in

after login is the home page 
here customer 