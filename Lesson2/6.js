"use strict"
let sum = parseInt(prompt("Введите сумму в рублях больше нуля", 1))

if (isNaN(sum) || sum <= 0) {
    alert("Введеное значение не удовлетворяет изначальному условию")
}else{
    let length = sum.toString().length;
    let symbol = sum.toString().charAt(length-1);
    let answer = "";
    switch (symbol) {
        case "1":
            answer = "рубль";
            break;
        case "2":
        case "3":
        case "4":
            answer = "рубля";
            break;      
        default:
            answer = "рублей";
            break;
    }
    alert(`Ваша сумма в ${sum} ${answer} успешно зачислена.`)
}
    



