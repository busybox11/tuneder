const config = require('../config')
const { authenticateWithCode } = require('../src/spotify/auth')
const { spotifyApi } = require('../src/spotify/index')

const dataUtils = require('../src/utils/data')

spotifyApi.setRefreshToken(config.spotify.testRefreshToken)
spotifyApi.refreshAccessToken().then(
  async function(tokenData) {
	spotifyApi.setAccessToken(tokenData.body['access_token']);

	var tops = {
		artists: {},
		genres: {}
	}


	let topArtistsReq = await spotifyApi.getMyTopArtists()
	let topArtists = topArtistsReq.body.items;

    for (artist of topArtists) {
    	for (genre of artist.genres) {
    		if (!Object.keys(tops.genres).includes(genre)) {
    			tops.genres[genre] = 1
    		} else {
    			tops.genres[genre] += 1
    		}
    	}
    }


	let topTracksReq = await spotifyApi.getMyTopTracks({
		limit: 100
	})
    let topTracks = topTracksReq.body.items;
	    
    for (track of topTracks) {
    	for (artist of track.artists) {
	    	if (!Object.keys(tops.artists).includes(artist.id)) {
	    		tops.artists[artist.id] = {
	    			name: artist.name,
	    			count: 1
	    		}
	    	} else {
	    		tops.artists[artist.id].count += 1
	    	}
	    }
    }


    console.log(dataUtils.Obj.sortByValue(tops.genres))


    var tmpArtists = {}
    var sortedArtists = {}
    for (const [artistID, artistData] of Object.entries(tops.artists)) {
    	tmpArtists[artistID] = artistData.count
    }
    tmpArtists = dataUtils.Obj.sortByValue(tmpArtists)

    for (artistID of Object.keys(tmpArtists)) {
    	sortedArtists[artistID] = tops.artists[artistID]
    }
    console.log(sortedArtists)
  },

  function(err) {
    console.log('Could not refresh access token', err);
  }
)