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
    node.style.backgroundColor = 'Black'
    node.style.padding = '20px'
}
let nav =document.querySelector('nav')
console.log(nav.textContent)

let youtube = document.querySelector('.youtube')
//youtube.setAttribute('href','https://www.youtube.com/c/VladilenMinin');
//youtube.textContent = 'Youtube-канал Владилена Минина'

function setYoutubeLink (youtube) {
youtube.setAttribute('href','https://www.youtube.com/c/VladilenMinin');
youtube.textContent = 'Youtube-канал Владилена Минина'
}

setTimeout( () => {
    setYoutubeLink(youtube)
}, 2000)
