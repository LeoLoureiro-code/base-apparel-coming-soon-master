const img =  document.getElementById('img-hero')
const input = document.getElementById('email')
const inputValue =  document.getElementById('email')
const form = document.getElementById('form')
const hero = document.getElementById('img-hero')
const btn = document.getElementById('sign-up-btn')
const error = document.getElementById('error')
const errorIcon = document.getElementById("error-icon")
const validation = /^[^]+@[^]+\.[a-z]{2,3}$/

const resize = () =>{
    if(window.innerWidth < 768){
       img.src = "images/hero-mobile.jpg"
    }else{
        img.src = "images/hero-desktop.jpg"
    }
}

const validateInput = () =>{
    if(!input.value.match(validation) || input.value.length === 0){
        input.removeAttribute('id')
        input.className = "inputError"
        error.style.display ="block"
        errorIcon.style.display = "block"
        input.value = ""
    }else{
        input.classList.remove('inputError')
        input.setAttribute('id', 'email')
        error.style.display = "none"
        errorIcon.style.display = "none"
        input.value = ""
    }

}

btn.addEventListener("click", validateInput)

window.addEventListener('resize', resize)

window.addEventListener('DOMContentLoaded', resize)