require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send(`App is listening on port: ${PORT}`)
})

app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`)
})
