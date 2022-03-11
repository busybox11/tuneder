const Obj = {
	// Thanks, https://stackoverflow.com/a/69719370
	sortByValue: (obj={}, asc=false) => { 
		const ret = {}
		Object.keys(obj).sort((a,b) => obj[asc?a:b]-obj[asc?b:a]).forEach(s => ret[s] = obj[s])
		return ret
	}
}

module.exports = {
	Obj
}