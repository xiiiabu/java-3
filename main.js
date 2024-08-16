function getBananas(number) {
    if (number === 1) {
        return (number) + ' banana';
    } else if (number > 1) {
        return (number) + ' bananas';
    } else {
        return "Invalid input. Please enter a positive number.";
    }
}


let number = parseInt(prompt("Введите число:"));
console.log(getBananas(number));
alert (getBananas(number))


//2


function sumEvenNumbers(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i += 2) {
        sum += i;
    }
    return sum;
}


let limit = parseInt(prompt("Введите число:"));
console.log('Сумма всех четных чисел до ' + (limit) + ' равна ' + (sumEvenNumbers(limit)));
alert ('Сумма всех четных чисел до ' + (limit) + ' равна ' + (sumEvenNumbers(limit)));


//3


function power(number, exponent) {
    if (isNaN(number) || number === 0) {
        return "Число не может быть равно 0";
    }

    if (isNaN(exponent) || exponent === 0) {
        exponent = 2;
    }

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= number;
    }

    return result;
}


let base = parseFloat(prompt("Введите число: "));
let exp = parseInt(prompt("Введите степень: "));

let result = power(base, exp);
alert ('Результат возведения ' + (base) + ' в степень ' + (exp) + ' равен '  + (result));