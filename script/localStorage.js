document.querySelector('.translate_button').addEventListener('click', function(event){
  let value = document.querySelector('input').value
  localStorage.setItem('inputBlock', value)
})

document.addEventListener('DOMContentLoaded', function (){

  let text = localStorage.getItem('inputBlock')
if (text && text.trim()) {
  document.querySelector('h1').textContent = text
}

})
