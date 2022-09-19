# Understanding Functions
This exercise is designed to improve your understanding of functions, function arguments and return statements.

## Learning Objectives
* Explain how functions, function arguments and `return` statements work

## Instructions
Go through each of the questions below, one by one, using the following process:

1. *Write down* a description of what you believe the function(s) are doing and what you think the answer to the question is. Do not skip the writing down step.

2. Run the code by typing (don't copy and paste, *type* the code for this exercise) it in to a js file and running the file with `node`. Name the file based on the question name (i.e `q1.js`, `q2.js`, etc.). Add `console.log` statements to observe values where required.

3. Did you answer correctly? If not, try to understand why not. What did you misunderstand about the code? **This step is crucial to this exercise. If the answer is not what you expected, do not move on until you understand why**. You can experiment with the code adding `console.log` messages to help you see what is happening. You can ask another member of the Cohort, you can look at previous exercises, online references, and of course you can ask the instructors using the support channel.

4. If necessary update your written answer (keep the original!) with your updated understanding.
5. Commit and push your updates
6. Move on to the next question.

Look at the `example-question.md` file for an example of what your writeup should look like (you don't need to include the actual code in your own write up, it's just provided in the example for clarity).

At the end of all questions, in a new MD file describe in your own words:

* What a function is
* How function arguments work
* How return statements work

Share this final write up with your instructor.

## Learning Cycle
This process is an example of applying a *learning cycle*. Remember this diagram from the beginning of the course?

![Learning Cycle](learning-cycle.png)

Be conscious of this process as you go through the exercise. If the code for a particular question does something you didn't expect, ask yourself why. Modify the code as necessary to help understand it's behavior, copy the code to a new file, add console.log messages to give you visibility. This process is the key to developing your own understanding of how specific concepts work. Keep this diagram in mind as you go through the exercise.

## Instructor Demo
Your instructor will demonstrate this process for the first question.

## Questions

### Q1
What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  return num1+num2
}
// should run 5 + 5 = 10

const result = myFunction(5,5)
```
<!-- 5 is assigned to num1 and 5 is also assigned to num2, then they are run through the return function which asks them to be added together. so I expect the output to be 10. -->
<!-- The result was 10 as expected -->

### Q2
What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  num1+num2
}
// no return value is used so the recall of function can not happen

const result = myFunction(5,5)
```
<!-- The input is still 5 for both num1 and 2 but there is no return before the command to add the 2 numbers together, so the expected answer would have been 10 however due to the lack of the recall command the answer will be undefined. -->
<!-- The answer was undefined as expected -->
### Q3
What is the value of `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}
// this function will take the input for num and minus 1 from it.
let num = 10
num = myFunction(num)
// this will run 10 - 1 = 9
num = myFunction(num)
// runs function again so 9 - 1 = 8
```
<!-- I think the answer will be 9 as 10 - 1 = 9 -->
<!-- The function presented the arguement for num to give a return for num subtract '1'. the expected outcome was thought to be 9 however did not realise that a the 'let' as a changeable function would subtract multiple times therefore producing number '8'.  -->
### Q4
What is the value of `add` and `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}
// this function would run 10 - 1 = 9
let num = 10
let add = 3
add = myFunction(add)
// would run 3 - 1 = 2
add = myFunction(add)
// would run 2 - 1 = 1

```
<!-- Expected the outcome 9 for the num return and the outcome 1 for the add return.  -->
<!-- num logged as 10 instead of 9 due to the let variable redefining num - 1, from 9 back to 10 -->

### Q5
What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

```
<!--There will be no value called back as the function has been given only one value to work with, therefor it can not assign/log a value. -->
<!-- The value did indeed come out as undefined -->
### Q6
What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1)
}
// will log num1 with num's value do to the swaping of the places of the 2 parameters
let num = 10
let num1 = 2

myFunction(num1, num)
```
<!-- The function will log undefined because the parameters are recalled in the wrong order.  -->
<!-- We found that num1 was recalled instead of num due to their placement inside the function at the end. The placement of the parameters are important in the way they are recalled. --> 

### Q7
What will the value of counter be at the end of this program? Why?

```javascript
let counter = 1
// counter currently equal 1 but is a variable that can be changed

function myFunction() {
  counter++
  return counter
}
// funtion is made and contains counter(1) and asks to add 1 to it because of the ++.This result in counter now being eqaul to 2 and its value is asked to be returned, as 2.

myFunction()
// counter = 2
const num = myFunction()
// counter =3
```
 <!-- The value of counter at the end of this programme will be 2.  -->
<!-- The value of counter was actually 3 but we now know this is because of the function being run twice.--> 
### Q8
What will the value of `result` be at the end of this program? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2
}

// the function here will return 10 + 1 = 11

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
// will run 4 + 10 = 14
```
<!-- const result will read 4 due to num3 being, I am expecting the programme to run 14 as it should add the 4 and 10. 
<!-- It did run 14 once I console logged result. -->
### Q9
What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)
```
<!-- The console will log 20 as the const num3 = 20.
<!-- The console did log 20 as expected -->

### Q10
What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1, 100)
```
<!-- the console will log num3 as 20 as it is a constant that has been defined as 20. -->
<!-- The console logged 100 instead of 20 and I now realise this is because 100 was placed in the place of num3 on the parameters, so the function read it as 100 as opposed to 20 -->

### Q11
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num2 + num3
}

const num1 = 10
const num2 = 1
const num3 = 20

const result = myFunction(1, 1, 1)
```
<!-- The result will be 3 as the parameters have been defined as 1 each and the functions adds them to add them together. -->
<!-- The result was 3 as I expected-->

### Q12
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
  // get some value will return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
  // this function will times 2 by 5
}
// the result should be 10

const result = myFunction(5)
```
<!-- The result was 10 as expected -->
### Q13
What will be the value of `result` when this code runs? Why?

```javascript

function getSomeValue() {
  return 2
}
// this function will return 2

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
  // 5 * 2 = 10
}

const result = myFunction(5)
```
<!-- The result was 10 as expected -->
### Q14
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}
// 2 * 2 = 4 

const result = myFunction(5)
```
<!-- I think the result will log the return for the function, so 2*2. -->
<!-- There was a NaN logged for result, this was due to the parameter not being used or defined agaian in the function, the 5 did not log nor did the 4 from the 2*2. -->
### Q15
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(true) {
    return -10
  }
  // 5 is true so this function = -10

  return num1 * 10
}

const result = myFunction(5)
```
<!-- result will be -10 -->
<!-- The result was as expected -->

### Q16
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(false) {
    return -100
  }
  // num1 is true so it will not return -100

  return num1 * 10
}
// 5* 10 = 50

const result = myFunction(5)
```
<!-- The result was as expected -->
### Q17
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return -100

  return num1 * 10
}

const result = myFunction(5)
```
<!-- I expect the result to be -1000 as the -100 will be taken then multiplied by the 10 -->
<!-- The result was -100 as it was the first return stated in the function, so it was the ascrbed value -->
### Q18
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {

  return num1 * 10
// 5 * 10 = 50
  return -100
}

const result = myFunction(5)
```
<!-- I think the result will be 50 -->
<!-- The result was as expected -->
### Q19
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num2
}

const result = myFunction(5, 10, 15)
// this will return 10 as that is the number assigned to num2
```
<!-- The result was as expected -->
### Q20
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num3
}
// (num1=5) + (num3= 1000) = 1005
const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
```
<!-- The result was as expected -->
### Q21
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1+num2
  return result
}

const result = myFunction(10, 20)
// the result will log as 30 as it is a constant.
myFunction(100, 2)
// this will not log as result
```
<!-- The result was as expected -->
### Q22
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  let result = num1+num2
  return result
}

let result = 0
myFunction(100, 2)
```
<!-- I think the result willbe 102 -->
<!-- I was not correct and the result was 0, I thought becuase it was a let not a const it would run the function line under it but I was not correct. The result did equal 0 as stated in the code -->
### Q23
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  result = num1+num2
}

let result = 0
myFunction(100, 2)
```
<!-- The result will be 102 because there is no let in the function so it will use 2 parameters instead of redfining it with the let on line 409  -->
<!-- The result was as expceted  -->

### Q24
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1+num2
  return 100
}

const result = myFunction(5, 2)
```
<!-- Unsure whether the result will be 100 as it is the value asked to be returned or if it will give 7 as the result was they are the parameters defined on line 424. -->
<!-- The result was 100, I now know this was because it was the value that the function was asked to return -->
### Q25
What will be the printed out by the console log statements when this code runs? Why?
```javascript
function myFunction(a) {
  let b = 20
  
  console.log("a:", a)
  console.log("b:", b)
  console.log("c:", c)
}

let a = 1
let b = 2
let c = 3

myFunction(100)
```
<!-- a = 100, b=2, c=3 -->
<!-- The result was as expected for a and c -->
<!-- b was equal to 20 not 2. I think this was because let was already defined in the function so when the function ran it alreadyt logged b as 20 before looking at line 440 -->