# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### PRODUCTS
# Index
    GET http://localhost:3000/products

# Show
    GET  http://localhost:3000/products/:id

# Create [token required]
    POST http://localhost:3000/products
    example for request body =
    {
        "id": "1",
        "name": "",
        "price": "",
        "category": "",
        "sells_number": ""   
    }
    Token should be provided through authorization header

- [OPTIONAL] Top 5 most popular products [Not implemented]
- [OPTIONAL] Products by category (args: product category)[Not implemented]

#### USERS
# Index [token required]
    GET http://localhost:3000/users 
    Token should be provided through authorization header

# Show [token required] 
    GET  http://localhost:3000/users/:id
    Token should be provided through authorization header

# Create N[token required] 
    POST http://localhost:3000/users
    example for request body = {
    "id" : "",
    "fname" : "",
    "lname" : "",
    "email" : "",
    "password": ""
}

#### ORDERS

User can view 
1- All orders through GET http://localhost:3000/orders/:user_id [token requied]

2-Current Orders by user (args: user id)[token required] 
    GET http://localhost:3000/orders/current/:user_id
  
3-[OPTIONAL] Completed Orders by user (args: user id)[token required] 
    GET http://localhost:3000/orders/completed/:user_id


## DATABASE SCHEMA
# USERS
PRIMARY KEY -->  user_id

     user_id INT| user_fname VARCHAR(50) | user_lname VARCHAR(50)| user_email VARCHAR |user_password VARCHAR
    ---------+------------+------------+------------+--------------

# PRODUCTS
PRIMARY KEY --> product_id

     product_id INT| product_name VARCHAR(50)| product_price INT  | product_category VARCHAR(50)| number_of_sells INT
    ------------+--------------+---------------+------------------+

# ORDERS
PRIMARY KEY --> order_id
FOREIGN KEY --> user_id

     order_id | user_id | order_status
    ----------+---------+--------------

# ORDER_PRODUCTS

PRIMARY KEY --> order_id + product_id
    order_id | product_id | quantity
    ----------+------------+----------


## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password`

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
