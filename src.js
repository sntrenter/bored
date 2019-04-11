//https://nodejs.org/en/docs/guides/getting-started-guide/
let buttonElement = document.getElementById('btn');



function test(){
  alert("hello!")
}

buttonElement.addEventListener('click',event => alert(event),false);
