const descendingOrder = (n) => {
	let array = n.toString().split('')
	array = array.map((num) => parseInt(num))
	return parseInt(array.sort().reverse().join(''))
}

console.log(descendingOrder(12539));
