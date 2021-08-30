function Car(name, year){
    this.name = name
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

let audiA1 = new Car('Audi', 2014)
console.log(audiA1)
audiA1.color = 'orange'

let bmw = new Car('BMW', 2015)
console.log(bmw)

console.log(audiA1.getAge())


////////////////////////////
let audi = Object.create({
    calculateDistancePerYear:function (){
Object.defineProperty(this, 'distancePerYear',{
    value: this.distance / this.age,
    enumerable: true,
    writable: false,
    configurable: false
})
    }
}, {
    name: {
        value: 'Audi',
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'A1',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2014,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 31300,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age:{
        enumerable: true,
        get: function (){
            console.log('Получаем возраст авто')
            return new Date().getFullYear() - this.year
        },
        set: function (){
            console.log('Устанавливаем значение')
        }
    }
})
console.log(audi)
console.log('__________________')

for (let key in audi){
    if (audi.hasOwnProperty(key))
    console.log(audi[key])
}
console.log('__________________')

console.log(Object.keys(audi).forEach(function (key){
     console.log(audi[key])
}))
