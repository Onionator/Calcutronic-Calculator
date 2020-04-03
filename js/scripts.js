// return the result of the two numbers added together
const add = (num1, num2) => num1 + num2;

// return the remainder of the the first number after subtracting the second number
const subtract = (num1, num2) => num1 - num2;

// return the ptroduct of the first number multiplied by the second number
const multiply = (num1, num2) => num1 * num2;

// return the amount of times the second number goes into the first number
const divide = (num1, num2) => num1 / num2;

// clear the number from the screen
const clear = () => $('#output').text("");

// calculate the result
function calculate(num, operation) {
    switch (operation) {
        case "add":
            num = add(num, parseFloat($('#output').text()));
            break;
        case "subtract":
            num = subtract(num, parseFloat($('#output').text()));
            break;
        case "multiply":
            num = multiply(num, parseFloat($('#output').text()));
            break;
        case "divide": 
            num = divide(num, parseFloat($('#output').text()));
            break;
    }
    return num;
}



$(document).ready(function() {
    let num;
    let operation = null;
    let singleOperation = true;
    
    $('#test').click(function() {
        console.log("test has been clicked.")
    });

    // display the number the user is entering
    $('.number').click(function() {
        singleOperation ? $('#output').append(this.value) : $('#output').text(this.value)
        singleOperation = true;
    })

    // clear the number from the screen
    $('#clear').click(function() {
        clear();
    })

    // clear everything
    $('#clearEverything').click(function() {
        clear();
        num = null;
        operation = null;
        singleOperation = true;
    })

    // determine which operation to do when equals is clicked
    $('.operation').click(function() {
        if (num == null) {
        num = parseFloat(($('#output').text()));
        operation = (this.value);
        clear();
        console.log(num, operation)
        } else {
            num = calculate(num, operation);
            $('#output').text(num);
            singleOperation = false;
            operation = (this.value);
        }
    })

    // determine which calculatuin to perform to determine the answer
    $('#equals').click(function() {
        num = calculate(num, operation);
        $('#output').text(num);
        singleOperation = false;
        operation = null;
    })

    // delete the last inputted digit
    $('#backspace').click(function() {
        $('#output').text($('#output').text().slice(0, $('#output').text().length - 1))
    })

})