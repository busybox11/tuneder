const { spotifyApi } = require('./index')

var scopes = [
	'ugc-image-upload',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'user-read-private',
	'user-read-email',
	'user-follow-modify',
	'user-follow-read',
	'user-library-modify',
	'user-library-read',
	'streaming',
	'app-remote-control',
	'user-read-playback-position',
	'user-top-read',
	'user-read-recently-played',
	'playlist-modify-private',
	'playlist-read-collaborative', 
	'playlist-read-private', 
	'playlist-modify-public'
]

function getLoginURL(state="defaultState") {
	var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)

	return authorizeURL
}

function authenticateWithCode(code) {
	return new Promise(async (resolve, reject) => {
		try {
			const authData = await spotifyApi.authorizationCodeGrant(code)
			resolve(authData)
		} catch(e) {
			reject(e)
		}
	})
}

module.exports = {
	getLoginURL,
	authenticateWithCode
}