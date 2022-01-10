"use strict"

function Plus(arg1, arg2) {
    return arg1 + arg2;
}

function Minus(arg1, arg2) {
    return arg1 - arg2;
}

function Multiply(arg1, arg2) {
    return arg1 * arg2;
}

function Divide(divided, divisor) {
    return divided/divisor;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return Plus(arg1, arg2);
        case "-":
            return Minus(arg1, arg2);
        case "*":
            return Multiply(arg1, arg2);
        case "/":
            return Divide(arg1, arg2);
        default:
            throw new Error("Неизвестная команда");
    }
    
}