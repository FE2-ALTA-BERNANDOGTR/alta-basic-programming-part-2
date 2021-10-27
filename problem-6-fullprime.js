console.log('PROBLEM 6 FULLPRIME \n');

function fullPrime(n) {
  let a = n + ('')
  let numArr = a.split('')
  let factor = 0;

  console.log(numArr)

  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i] + '\n')
    for (let j = 0; j <= numArr[i]; j++) {
      if (numArr[i] % j === 0) {
        factor++;
        console.log(j)
      }
    }
    // if (num % i === 0) {
    //   factor++;
    //   //console.log(i)
    // }
    console.log('\n')
  }
  console.log(factor);
  if (factor != 4) {
    console.log(false)
  } else {
    console.log(true)
  }
}

fullPrime(23);