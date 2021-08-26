document.querySelector('.btn_alert').addEventListener('click', function (){
    alert('Кнопка была нажата')
})

document.querySelector('.btn_confirm').addEventListener('click', function (){
    let decision = confirm('Точно нажать на кнопку?')
    if (decision === true){
        alert('Кнопка была нажата')
    }
    else {
        console.error('Нажали отмену')
    }
})

document.querySelector('.btn_promt').addEventListener('click', function (){
   let pr = prompt('Введите свое имя', 'Роман?')
    let age = prompt('Введите ваш возраст')
    alert(`Вас зовут: ${pr} и Вам ${age} лет`)
})

console.log('log')
console.warn('warn')
console.info('info')
console.error('error')
