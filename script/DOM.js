const heading = document.getElementById('hello')
console.dir(heading)

setTimeout( () => {
 addStylesTo(heading)
}, 2000)



// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const hList = document.querySelectorAll('h1') //всегда один первый попавшийся элемент
console.dir(hList[0])

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
