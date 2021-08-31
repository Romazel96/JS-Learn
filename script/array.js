// Массивы
let array = ['Moscow', 'Rome', 'Berlin', 'London', 'Madrid']
console.log(array[2]) //вывод значнеия массива под индексом
console.log((array[2] = 'Leningrad')) //замена элемента
console.log(array[5] = 'Kiev') //добавление элемента
console.log(array.length) //длина массива
console.log(array.shift())//удаляет первый элемент
console.log(array.pop())//удаляет последний элемент
console.log(array.push('Prague')) //добавляет в конец массива новый элемент
console.log(array.unshift('New York', 'Los Angeles')) //Добавляет элемент в начало массива:
//Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
//самый простой способ очистить массив – это arr.length = 0
console.log(array.toString()) //возвращает список элементов, разделённых запятыми в виде строки
for (const arr of array)
    console.log(arr)
console.log(array.splice(1,1)) // начиная с позиции 1, удалить 1 элемент
console.log(array.splice(0,3, 'Minsk', 'Pekin', 'Tokyo')) //удалить 3 первых элемента и заменить их другими
console.log(array.indexOf('Prague',2)) // ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
console.log(array.lastIndexOf('Prague', 4)) //то же самое, но ищет справа налево.
console.log(array.includes('Prague')) //ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
console.log(array.find(item => item.length >= 6)) //поиск с определенным условием и выводит первый попавшийся
console.log(array.filter(item => item.length >= 6)) //аналогочно, но выводит все значения
console.log(array.sort()) //сортирует массив по заданым функцией правилам
let nameLength = (item) => item.length >=6
console.log(array.map(nameLength))
console.log(array.every(nameLength)) //возвращае true, если ВСЕ элементы массива выполняют условия
console.log(array.some(nameLength)) //возвращае true, если хотя бы один элемент массива выполняет условия
console.log(array.reverse()) //обратный порядок элементов
console.log(array.join(': ')) //создает строку из массива с определенным разделителем
console.log(array.split(':'))
console.log(array.map(fucntion() {})) //
console.log(array.forEach(el => {
}));

const arr2 = JSON.parse(JSON.stringify(array)); // Копирование массива
