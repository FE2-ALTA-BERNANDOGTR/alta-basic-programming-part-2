//PROBLEM 1

console.log('PROBLEM 1 CONVERT SCORE \n')
let score = 50;

if (score >= 80) {
  console.log('nilai a')
} else if (score >= 65 && score < 80) {
  console.log('nilai b+')
} else if (score >= 50 && score < 65) {
  console.log('nilai b')
} else if (score >= 35 && score < 50) {
  console.log('nilai c')
} else{
  console.log('nilai d')
}

console.log('\n');

//PROBLEM 2

let bilangan = 25;

console.log('PROBLEM 2 FACTOR \n')
console.log(`Faktor dari ${bilangan} yaitu : \n`)
for (let i = 0; i <= bilangan; i++) {
  if(bilangan%i === 0){
    console.log(i)
  }
}

//PROBLEM 3
console.log('\n');

let a = 13;

console.log('PROBLEM 3 PRIMENUMBER \n')
function checkPrimeNum(num) {
  let factor = 0; 
  for (let i = 0; i <= num; i++) {
    if(num%i === 0){
      factor++;
      //console.log(i)
    }
  }
  //console.log(factor);
  if (factor != 2) {
    console.log(false)
  } else {
    console.log(true)
  }
}

checkPrimeNum(a);

console.log('\n');

//PROBLEM 4

let word = 'kasur rusak'

console.log('PROBLEM 4 PALINDROME \n');

function palindromeCheck(a) {
  let wordLength = a.length;
  let midpoint = (wordLength/2-0.5);
  let strArr = a.split('')
  let subStr1 = strArr.slice(0,midpoint+1)
  console.log(subStr1);
  let subStr2 = [];

  for (let i = wordLength-1; i >= midpoint; i--) {
    subStr2.push(a[i])
  }
  console.log(subStr2);

  if (subStr2.toString() === subStr1.toString()) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

palindromeCheck(word);

console.log('\n');

//PROBLEM 5

console.log('PROBLEM 5 EXPONENTIATION');

function exponent(num, index) {
  let temp = 1;

  for (let i = 0; i < index; i++) {
    let result = num * temp;
    temp = result;
  }
  return console.log(temp);
}

exponent(2,3);

console.log('\n');


console.log('PROBLEM 6 FULLPRIME \n');

