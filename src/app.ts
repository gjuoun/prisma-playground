import express from 'express'

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

app.listen(3000, () => {
  console.log("running on port 3000");

})