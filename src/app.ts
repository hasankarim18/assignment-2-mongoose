import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

const getHelloController = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Hello world',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong!!!',
      error: error,
    })
  }
}

app.use('/api/users', userRoutes)

// app.get('/api/users', (req, res) => {
//   res.send({
//     message: 'get',
//   })
// })

app.get('/', getHelloController)

export default app
