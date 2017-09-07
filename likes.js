const likes = (names) => {
	let likeMsg = 'no one likes this'
	if (typeof names[0] === 'string') {
		likeMsg = names[0] + ' likes this'
	}
	return likeMsg
}

console.log(likes(['peter']))
