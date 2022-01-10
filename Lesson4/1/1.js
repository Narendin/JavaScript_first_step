"use strict"

function getObjectByInt(number){
    if (isNaN(+number)) {
        console.log(`${number} не является числом!`)
    }else if (!Number.isInteger(number)) {
        console.log(`Число ${number} не является целым!`)
    }else if (number < 0 || number > 999) {
        console.log(`Число ${number} не входит в диапазон [0,999]`)
    }else {
        return {
            units: number % 10,
            tens: Math.floor(number/ 10 % 10),
            hundreds: Math.floor(number / 100)
        }        
    }
    return {};
}

const numbers = [ -20, 0, 7, 15, 234, 999, 1029, "a12", 12.5];

for (const number of numbers) {
    console.log(getObjectByInt(number));
}

