const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose
  .connect(
    'mongodb://mongo:27017/node-mountain-child',
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    mongoose
      .connect(
        'mongodb://localhost:27017/node-mountain-child',
        { useNewUrlParser: true }
      )
      .then(() => console.log('DB Connected!'))
      .catch(err => console.error(err))
  })

const Model = mongoose.model(
  'Mountain',
  new mongoose.Schema({
    name: {
      type: String
    }
  })
)

app.use(express.static('.'))

app.get('/mongo', async (req, res) => {
  let data = await Model.find({})
  res.json(data)
})

app.listen(process.env.PORT || 3200, () => {
  console.log(`Listening on port ${process.env.PORT || 3200}`)
})
