// Строки
let str = 'Hello World!'
//Типы кавычек
let personName = 'Roman "ss"'
let personName1 = "Roman 'sds'"
let sayMyName = `Тебя зовут ${personName}khgkjgk`

console.log(str)
console.log(str.length) // Длина строки.
console.log(str[0]) //вывод первого символа
console.log(str.charAt(0))
console.log(str[str.length - 1]) //вывод последнего символа

// вывод всех символов в строке
for (let words of str) {
    console.log(words)
}

console.log(str.toUpperCase()) //верхний регистр
console.log(str.toLowerCase()) // нижний регистр
console.log(str.includes('World')) //проверяет наличие символа в строке
console.log(str.startsWith('Hello')) //проверка начала строки
console.log((str.endsWith('!'))) //проверка конца строки

// Получение подстроки
console.log(str.slice(1,5)) //Возвращает часть строки от start до (не включая) end
console.log(str.substring(6,11)) //Возвращает часть строки между start и end
console.log(str.substr(6,5)) //Возвращает часть строки от start длины length
console.log(str.indexOf('World')) //вернет позицию первого упоминания искомой подстроки
console.log(str.lastIndexOf('World')) //последнее вхождение поискового запроса
console.log((str.trim())) //убирает пробелы в начале и конце строки
console.log(str.trimStart())
console.log((str.trimEnd()))
console.log(str.repeat(2)) //повторяет строку n раз
console.log(str.padStart(15))// Дополнить строку "hello" пробелами, чтобы
console.log(str.padEnd(15)) // она получила длину в 8 символов:
console.log(str.replace('World', 'мир')) //замена определенного текста
