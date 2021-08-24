//Функции
let carName = 'audi';
let carYear = 2014;
let personYear  = 1996;

//if ((2021 - carYear) < 10) {
//    console.log('Возраст меньше 10 лет');
//} else {
//    console.log('Возраст больше 10 лет');
//}

const age = (objectYear) => {
    let year = 2021 - objectYear
    if ((2021 - objectYear) < 10) {
         console.log(`Год рождения объекта ${objectYear}, т.е. возраст объекта меньше 10 лет и составляет ${year}`)
    } else {
    console.log(`Возраст объекта больше 10 лет и составляет ${year}`);
}
}

age(2021)
