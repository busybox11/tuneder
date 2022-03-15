const config = require('../../config')
var SpotifyWebApi = require('spotify-web-api-node')

var spotifyApi = new SpotifyWebApi({
    clientId: config.spotify.clientID,
    clientSecret: config.spotify.clientSecret,
    redirectUri: config.spotify.redirectURI
})

async function getPlaylistFromID(id) {
    spotifyApi.setRefreshToken(config.spotify.testRefreshToken)
    const tokenData = await spotifyApi.refreshAccessToken()
    spotifyApi.setAccessToken(tokenData.body['access_token'])

    const playlistData = await spotifyApi.getPlaylist(id)
    return playlistData.body
}

async function getArtistFromID(id) {
    const artistData = await spotifyApi.getArtist(id)
    return artistData.body
}

module.exports = {
    spotifyApi,

    getPlaylistFromID,
    getArtistFromID
}