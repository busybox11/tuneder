const config = require('../../config')
var SpotifyWebApi = require('spotify-web-api-node')

var spotifyApi = new SpotifyWebApi({
    clientId: config.spotify.clientID,
    clientSecret: config.spotify.clientSecret,
    redirectUri: config.spotify.redirectURI
})

module.exports = {
    spotifyApi
}