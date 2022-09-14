let counter = 1
// counter currently equal 1 but is a variable that can be cahnged

function myFunction() {
  counter++
  return counter
}
// funtion is made and contains counter(1) and asks to add 1 to it because of the ++.This result in counter now being eqaul to 2 and its value is asked to be returned, as 2.

myFunction()
const num = myFunction()
console.log(num)