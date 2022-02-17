import express, { ErrorRequestHandler } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()

interface Response {
  data: string
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send({
    data: 'hello'
  } as Response)
})

app.get('/users',async (req,res) => {
  const users = await prisma.user.findMany()

  res.send(users)
})


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!')
}

app.use(errorHandler)

app.listen(3000, () => {
  console.log("running on port 3000");
})