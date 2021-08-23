// Числа

let num = 2021
let num1 = 20.21
let num2 = '20.21year'

console.log(num)
console.log(num.toString()) //преобразование в строку

console.log(Math.floor(num1)) //Округление в меньшую сторону
console.log((Math.ceil(num1))) //Округление в большую сторону
console.log(Math.round(num1)) //Округление до ближайшего целого

console.log((num1.toFixed(1))) //округляет число до n знаков после запятой и возвращает строковое представление результата.

console.log(parseInt(num2))
console.log(parseFloat(num2))

