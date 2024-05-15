# FullstackHiringTask-Blendnet

Backend (Django with Django REST Framework)
Technology Stack:

Django: A Python-based framework that is robust and comes with ORM support for database interactions.
Django REST Framework: For building RESTful APIs.
PostgreSQL: As the database to store user and watchlist data.
JWT Authentication: For handling secure user authentication.

Setup:

1) Install Django and Django REST Framework:

pip install django djangorestframework
pip install djangorestframework_simplejwt

2) Setup PostgreSQL:

Install PostgreSQL and create a database.
Configure the database in Django settings.

3) Models:

User: Utilize Django’s built-in User model.
StockSymbol: Model to store stock symbols.
Watchlist: Model to store user watchlists linking User and StockSymbol.

4) APIs:

User registration and authentication endpoints.
Endpoints to manage watchlists (add, delete, view).
Endpoint to fetch stock data using Alpha Vantage API.

5) Alpha Vantage Integration:

Use Python's requests library to fetch data from the Alpha Vantage API.



