const greet = document.getElementById('greet');
greet.addEventListener('click', function() {
  const userName = prompt("Please enter your name:");
  alert(`Nice to meet you, ${userName}!`)
});

const box = document.getElementById('box');
const txt = document.getElementById('btn')

const styl = document.getElementById('style');
styl.addEventListener('click',function(){
  box.classList.add('styled-box')
  txt.classList.add('styled-btn')
})

const rest = document.getElementById('reset');

rest.addEventListener('click',function(){
  box.classList.remove('styled-box')
  txt.classList.remove('styled-btn')
})