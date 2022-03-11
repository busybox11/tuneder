require('dotenv').config()

const config = {
    spotify: {
        clientID:         process.env.SPOTIFY_CLIENT_ID,
        clientSecret:     process.env.SPOTIFY_CLIENT_SECRET,
        redirectURI:      process.env.SPOTIFY_REDIRECT_URI,

        testRefreshToken: process.env.SPOTIFY_TEST_REFRESH_TOKEN
    }
}

module.exports = config