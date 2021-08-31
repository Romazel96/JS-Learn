let person = {
    name: 'Roman',
    lastName: 'Zelensky',
    age: 25,
    isProgrammer: true,
    'weddingDate': '17/10/2020',
    func(){
        console.log('Hello Person')
    },
    language: ['ru', 'en'],
    info() {
        console.info('Информация об имени:', this.name)
    }
    }


    for (let [key,value] of Object.entries(person)) {
        console.log(key, value)
    }

    if ('name' in person) {}
    person.name

console.log(person.name) //вывод отдельных ключей объектов
console.log(person['age'])
console.log(person["wedding"])
person.func()
person.age++ //взаимодействие с ключами
person.language.push('JS') //добавление сведений
person.isProgrammer = undefined //замена сведений
delete person.isProgrammer //удаление ключа
console.log(person)
const {name, age} = person
console.log(name, age);
// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//     console.log('key:', key);
//     console.log('value:', person[key]);
// }
// }
Object.keys(person).forEach((key)=> {
    console.log('key:', key);
    console.log('value:', person[key])
})
//Context
person.info()
const logger = {
    keys(){
        console.log('Object keys:', Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {
                console.log(`"${key}": ${this[key]}`)
            })
    }
}
const bound = logger.keys.bind(person)
bound()
logger.keysAndValues.call(person)

////////////////////////////////
