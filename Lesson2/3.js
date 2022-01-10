"use strict"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(-1000,1000);
let b = getRandomInt(-1000,1000);

if (a >=0 && b >= 0) {
    alert(`a = ${a} >= 0\nb = ${b} >= 0\na - b = ${a-b}`);
}else if (a<0 && b <0){
    alert(`a = ${a} < 0\nb = ${b} < 0\na * b = ${a*b}`);
}else{  // не знаю, почему написано, что это пункт сложнее. Фактически, если оба одновременно не больше/равны нулю и не меньше нуля, то одно из них больше/равно нулю, а второе - меньше
    alert(`a = ${a}\nb = ${b}\na + b = ${a+b}`)
}