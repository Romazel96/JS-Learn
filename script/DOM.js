//let li = document.getElementById('#arrays')
//console.dir(li)

//let list = document.getElementsByClassName('.list_theme_item')
//console.dir(list)

//setTimeout( () => {
//addStylesTo(li)
//}, 2000)

// const heading2 = document.getElementsByTagName('h2')[0]

const hList = document.querySelectorAll('h1')

setTimeout( () => {
    addStylesTo(hList[0])
}, 2000)

function addStylesTo(node) {
    node.style.color = '#008e8c'
    node.style.textAlign = 'center'
    node.style.fontSize = '50px'
    node.style.border = '3px solid black 30px'
    node.style.borderRadius = '30px'
    node.style.backgroundColor = 'Black'
    node.style.margin = '25px 25px 20px 25px'
    node.style.padding = '20px'
}
let nav =document.querySelector('nav')
console.log(nav.textContent)



let buttonList = document.querySelectorAll('button')
let inputbtn = document.querySelector('.input_block')

function buttonCLick() {
    hList[0].textContent = inputbtn.value
}
function btnClick2() {
    hList[0].textContent = 'Hello JavaScript in GRFC!'
}

buttonList[0].addEventListener('click', buttonCLick )
buttonList[1].addEventListener("click",btnClick2 )

let youtube = document.querySelector('.youtube')
//youtube.setAttribute('href','https://www.youtube.com/c/VladilenMinin');
//youtube.textContent = 'Youtube-канал Владилена Минина'

//setTimeout( () => {
//    setYoutubeLink(youtube)
//}, 2000)



youtube.addEventListener('mouseenter', function setYoutubeLinkEnter () {
youtube.textContent = 'YouTube-канал Владилена Минина'
youtube.setAttribute('href','https://www.youtube.com/c/VladilenMinin');
})

youtube.addEventListener('mouseleave', function setYoutubeLinkLeave () {
youtube.textContent = 'YouTube'
youtube.setAttribute('href','https://www.youtube.com/');
})
