const express = require('express')
const app = express()

app.use(express.static('/'))

app.listen(process.env.PORT || 3200, () => {
  console.log(`Listening on port ${process.env.PORT || 3200}`)
})