//Функции
let carName = 'audi';
let carYear = 2014;
let personYear  = 1996;

//if ((2021 - carYear) < 10) {
//    console.log('Возраст меньше 10 лет');
//} else {
//    console.log('Возраст больше 10 лет');
//}



function calculateAge (objectYear) {
    let currentYear = 2021
    let result = currentYear - objectYear
    return result
}

const age = (objectYear) => {
       if (calculateAge (objectYear) < 10) {
         console.log(`Год рождения объекта ${objectYear}, т.е. возраст объекта меньше 10 лет и составляет`)
    } else {
    console.log(`Возраст объекта больше 10 лет и составляет`);
}
}
age(2021)
