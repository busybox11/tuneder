const config = require('../../config')

const path = require('path')

const express = require('express')
const app = express()

const spotify = require('../spotify/index')

app.get('/api/spotify/getPlaylist/:id', async (req, res) => {
	res.json(await spotify.getPlaylistFromID(req.params.id))
})

app.get('/api/spotify/getArtist/:id', async (req, res) => {
	res.json(await spotify.getArtistFromID(req.params.id))
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../views/swipe.html'))
})

app.listen(config.express.port, () => {
    console.log(`Web server listening on port ${config.express.port}`)
})