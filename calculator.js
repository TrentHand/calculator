//variables referencing HTML elements
var addBTN = document.getElementById("addBTN");
var subtractBTN = document.getElementById("subtractBTN");
var multiplyBTN = document.getElementById("multiplyBTN");
var dividBTN = document.getElementById("dividBTN");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");


// In your JavaScript, put an event listener on each of the buttons.
addBTN.addEventListener("click", function() {
	var input1 = parseInt(num1.value);
	var input2 = parseInt(num2.value);
	var finalResult = finalSolution(input1, input2, add);
	DOMprint(finalResult);
});

subtractBTN.addEventListener("click", function() {
	var input1 = parseInt(num1.value);
	var input2 = parseInt(num2.value);
	var finalResult = finalSolution(input1, input2, subtract);
	DOMprint(finalResult);
});

multiplyBTN.addEventListener("click", function() {
	var input1 = parseInt(num1.value);
	var input2 = parseInt(num2.value);
	var finalResult = finalSolution(input1, input2, multiply);
	DOMprint(finalResult);
});

divideBTN.addEventListener("click", function() {
	var input1 = parseInt(num1.value);
	var input2 = parseInt(num2.value);
	var finalResult = finalSolution(input1, input2, divide);
	DOMprint(finalResult);
});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(a, b) {
	var result = a * b;
	return result;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(a, b) {
	var result = a + b;
	return result;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(a, b) {
	var result = a - b;
	return result;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(a, b) {
	var result = a / b;
	return result;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function finalSolution(a, b, func) {
 		return func(a, b);
 }

 //function to send result to DOM
function DOMprint(finalResult) {
	var print = document.getElementById("printResult");
	print.innerHTML = "The solution is " + finalResult;

}