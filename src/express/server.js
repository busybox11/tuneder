const config = require('../../config')

const path = require('path')

const express = require('express')
const app = express()

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../views/swipe.html'))
})

app.listen(config.express.port, () => {
    console.log(`Web server listening on port ${config.express.port}`)
})