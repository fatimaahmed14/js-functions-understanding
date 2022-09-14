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

const result = myFunction(5,5)
```
///5 is assigned to num1 and 5 is also assigned to num2, then they are run through the return function which asks them to be added together. so I expect the output to be 10.

### Q2
What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  num1+num2
}

const result = myFunction(5,5)
```
///The input is still 5 for both num1 and 2 but there is no return before the command to add the 2 numbers together, so the expected answer would have been 10 however due to the lack of the recall command the answer will be undefined.
### Q3
What is the value of `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
num = myFunction(num)
num = myFunction(num)
``` 

### Q4
What is the value of `add` and `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)
```

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

### Q6
What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num1, num)
```

### Q7
What will the value of counter be at the end of this program? Why?

```javascript
let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()
```

### Q8
What will the value of `result` be at the end of this program? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2
}

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
```

### Q9
What will be logged out on the console when this code rus? Why?

```javascript
function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)
```

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

### Q12
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

const result = myFunction(5)
```

### Q13
What will be the value of `result` when this code runs? Why?

```javascript

function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
}

const result = myFunction(5)
```

### Q14
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

const result = myFunction(5)
```

### Q15
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

const result = myFunction(5)
```


### Q16
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

const result = myFunction(5)
```

### Q17
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return -100

  return num1 * 10
}

const result = myFunction(5)
```

### Q18
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {

  return num1 * 10

  return -100
}

const result = myFunction(5)
```

### Q19
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num2
}

const result = myFunction(5, 10, 15)
```

### Q20
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num3
}

const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
```

### Q21
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1+num2
  return result
}

const result = myFunction(10, 20)
myFunction(100, 2)
```

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

### Q23
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  result = num1+num2
}

let result = 0
myFunction(100, 2)
```

### Q24
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1+num2
  return 100
}

const result = myFunction(5, 2)
```

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
