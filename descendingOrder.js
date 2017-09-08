const descendingOrder = (n) => {
	let newNum = 0
	let array = n.toString().split('')
	array = array.map((num) => parseInt(num))
	newNum = parseInt(array.sort().reverse().join(''))
	return newNum
}

console.log(descendingOrder(12539));
