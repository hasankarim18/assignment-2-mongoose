// import { z } from 'zod'

// const orderSchema = z.object({
//   productName: z.string().required(),
//   price: z.number().required(),
//   quantity: z.number().required(),
// })

// type TOrder = z.infer<typeof orderSchema>

// const userSchema = z.object({
//   userId: z.number().required(),
//   username: z.string().required(),
//   password: z.string().required(),
//   fullName: z.object({
//     firstName: z.string(),
//     lastName: z.string(),
//   }),
//   age: z.number(),
//   email: z.string(),
//   hobbies: z.array(z.string()),
//   address: z.object({
//     street: z.string(),
//     city: z.string(),
//     country: z.string(),
//   }),
//   orders: z.array(orderSchema).default([]),
//   isDeleted: z.boolean(),
// })

// type TUser = z.infer<typeof userSchema>
