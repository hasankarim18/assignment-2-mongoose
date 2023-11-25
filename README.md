
### [Domain link]( https://assignment-2-mongoose.vercel.app/): https://assignment-2-mongoose.vercel.app/

# Section 1 
## User Management 
- End Point: POST,  /api/users 
```
https://assignment-2-mongoose.vercel.app/api/users

```


```
- The api for update user "/api/users" with post request
 To create data Json structure should be a post request and the data sturture should be:

{
    "userData": {
        ------
        ------
    }
}
```



------------------------------

# Section 2 
## Order Management
 1. Add New Product 

- End point: PUT, /api/users/:userId/orders
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

2. Retrive all product of a single user. 
- End Point: GET, /api/users/:userId/orders 

2. Calculate total price 
- End point: GET /api/users/:userId/orders/total-price
