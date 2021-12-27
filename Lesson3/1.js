"use strict"

console.log("0 - это ноль");
for (let index = 1; index <= 10; index++){
       if (index % 2 == 0) {
           console.log(`${index} - четное число`)
       }else{
           console.log(`${index} - нечетное число`)
       }
}