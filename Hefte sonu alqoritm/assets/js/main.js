// Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir. Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.

function numbers(num1, num2, operator, result) {
    var num1 = prompt("1-ci ededi daxil edin:");
    var operator = prompt("operator daxil edin:");
    var num2 = prompt("2-ci ededi daxil edin:");
    var result = 0
    switch (operator) {
        case "+":
            result = (Number(num1) + Number(num2));
            break;

        case "-":
            result = (num1 - num2);
            break;

        case "*":
            result = (num1 * num2);
            break;

        case "/":
            result = (num1 / num2);
            break;
    }
    return result;
}
console.log(numbers());