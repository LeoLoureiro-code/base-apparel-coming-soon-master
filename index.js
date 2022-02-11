const img =  document.getElementById('img-hero')
const input = document.getElementById('email')
const form = document.getElementById('form')
const btn = document.getElementById('sign-up-btn')
const error = document.getElementById('error')
const validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const resize = () =>{
    if(innerWidth < 768){
       img.src = "images/hero-mobile.jpg"
    }else{
        img.src = "images/hero-desktop.jpg"
    }
}

const validateInput = () =>{
    // console.log(input.value)
    if(!input.value.toLowerCase().match(validation) || input.value === ""){
        input.removeAttribute('id')
        input.className = "inputError"
        error.style.display ="block"
        input.value = ""
    }else{
        input.classList.remove('inputError')
        input.setAttribute('id', 'email')
        error.style.display = "none"
        input.value = ""
    }
}

form.addEventListener("click", function(event){
    event.preventDefault()
  });

addEventListener('resize', resize)

addEventListener('DOMContentLoaded', resize)

btn.addEventListener('click', validateInput)

btn.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      validateInput()
    }
})