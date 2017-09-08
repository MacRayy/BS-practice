'use stict'

const likes = (names) => {
	let likeMsg = 'no one likes this'
	if (typeof names[0] === 'string') {
		if (names.length === 1) {
			likeMsg = names[0] + ' likes this'
		} else if (names.length === 2) {
			likeMsg = names[0] + ' and ' + names[1] + ' like this'
		} else if (names.length === 3) {
			likeMsg = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
		} else {
			likeMsg = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
		}
	}
	return likeMsg
}

console.log(likes(["Max", "John", "Mark"]))
