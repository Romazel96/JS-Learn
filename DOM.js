const heading = document.getElementById('hello')
console.dir(heading)

setTimeout( () => {
 addStylesTo(heading)
}, 2000)



// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const h2List = document.querySelectorAll('h2') //всегда один первый попавшийся элемент
console.dir(h2List[0])

setTimeout( () => {
    addStylesTo(h2List[0])
}, 2000)


function addStylesTo(node) {
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.fontSize = '50px'
    node.style.backgroundColor = 'Black'
    node.style.padding = '20px'
}
