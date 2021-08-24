//Циклы
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1. for
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0){
        continue
    }
        console.log(array[i])
    }

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        console.log(array[i])
    }
}

array.push('String')
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string'){
        break
    }
        console.log(array[i])
}
