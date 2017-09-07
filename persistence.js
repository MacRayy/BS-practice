function persistence(num) {
  let steps = 1
  let strNumbers = num.toString().split('')
  let numbers = []
  strNumbers.forEach((number) => numbers.push(parseInt(number)))
  if (numbers.length === 1) {
    steps = 0
  } else {
    let n = numbers.length
    let multiple = 0
    console.log(numbers);
    while (n >= 1) {
	    multiple = numbers.reduce((mult, number) => mult * number, 1)
			newStrNumbers = multiple.toString().split('')
			numbers = []
			newStrNumbers.forEach((number) => numbers.push(parseInt(number)))
    	console.log(numbers);
			n--
			steps++
			if (numbers.length === 1) {
				steps--
			}
	  }
  }
  return steps
}

console.log(persistence(25));
