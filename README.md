
# Section 0 (How to setup)

- create a .env file. and write the necessary `username`, `password` and `databasename` in the DATABASE_URL
```
NODE_ENV=development

DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.vvca3fh.mongodb.net/<databasename>?retryWrites=true&w=majority

PORT=5000

BCRYPT_SALT_ROUNDS=12
```



# Section 1 
## User Management 

#### 1. Create a user
- End Point: POST,  /api/users 
- For localhost
```
http://localhost:5000/api/users
```
- For live host
```
https://assignment-2-mongoose.vercel.app/api/users
```
- The POST request the body should contain the json data. The below structure should be follow. The data is a demo data.

```
{
    "userData": {
        "userId": number,
        "username": "string",
        "password": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": number,
        "email": "string",
        "isActive": boolean,
        "hobbies":string[],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        },
        "orders": string[]
    }
}
```


#### 2. Retrive all users
- End Point: GET, /api/users 
Sample link
- For localhost
```
http://localhost:5000/api/users
```
- For live host
```
https://assignment-2-mongoose.vercel.app/api/users
```
#### 3. Retrive a specific user by id
- End Point: GET, /api/users/:userId 
Sample link
- For localhost
```
http://localhost:5000/api/users/20
```
- For live host
```
https://assignment-2-mongoose.vercel.app/api/users/20
```

#### 4. Update user information 
- End Point: PUT, /api/users/:userId
- The PUT request the body should contain the json data. The below structure should be follow. The data is a demo data.

Sample link 
- For Localhost
```
http://localhost:5000/api/users/8
```
- For live host
```
https://assignment-2-mongoose.vercel.app/api/users/8
```

```
{
    "userData": {
        "userId": number,
        "username": "string",
        "password": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": number,
        "email": "string",
        "isActive": boolean,
        "hobbies":string[],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        },
        "orders": string[]
    }
}
```

#### 5. Delete a user 
- Endpoint : DELETE /api/users/:userId 
Sample link
-For localhost
```
http://localhost:5000/api/users/8
```
- For Live host
```
https://assignment-2-mongoose.vercel.app/api/users/8
```


------------------------------

# Section 2 
## Order Management
 #### 1. Add New Product 

- End point: PUT, /api/users/:userId/orders
- For localhost
```
http://localhost:5000/api/users/20/orders
```
- For live host
```
https://assignment-2-mongoose.vercel.app/api/users/20/orders
```
- body json structure 
```
 {"order": 
    {
        "productName": "string",
        "price": number,
        "quantity": number
    }           
 }
```

#### 2. Retrive all product of a single user. 
- End Point: GET, /api/users/:userId/orders 
- For localhost
```
http://localhost:5000/api/users/8/orders
```
- For Live host
```
https://assignment-2-mongoose.vercel.app/api/users/8/orders
```

#### 3. Calculate total price 
- End point: GET /api/users/:userId/orders/total-price
-For localhost
```
http://localhost:5000/api/users/8/orders/total-price
```

- For Live host
```
https://assignment-2-mongoose.vercel.app/api/users/8/orders/total-price
```
