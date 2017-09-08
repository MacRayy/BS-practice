const getCount = (str) => {
  let vowelsCount = 0;
  for (let i = str.length - 1; i >= 0; i--) {
  	if (str[i] === 'a' || str[i] === 'e' || str[i] === 'u' || str[i] === 'o' || str[i] === 'i') {
  		vowelsCount++
  	}
  }

  return vowelsCount;
}

console.log(getCount('foxiberta'));
