var person = {
    name:'Roman',
    age: 25,
    car:{
        model:'Audi'
    },
    job:'frontend'
}
let str = JSON.stringify(person)
console.log(str)
console.log(JSON.parse(str))
