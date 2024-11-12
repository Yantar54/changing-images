const body = document.querySelector("body")

const img = document.querySelector("#change-image")

const btn1 = document.querySelector("#change-btn-1")

const btn2 = document.querySelector("#change-btn-2")

const btn3 = document.querySelector("#change-btn-3")

const btn4 = document.querySelector("#change-btn-4")

const btn5 = document.querySelector("#change-btn-5")

// body.style.backgroundColor = "brown"


btn1.addEventListener("click", (e) => {
    img.innerHTML = '\<img src="./assets/images/stalin1.png">'


});


btn2.addEventListener("click", (e) => {
    img.innerHTML = '\<img src="./assets/images/stalin2.webp">'


});



btn3.addEventListener("click", (e) => {
    img.innerHTML = '\<img src="./assets/images/stalin3.webp">'


});


btn4.addEventListener("click", (e) => {
    img.innerHTML = '\<img src="./assets/images/stalin4.jpeg">'


});


btn5.addEventListener("click", (e) => {
    img.innerHTML = '\<img src="./assets/images/stalin5.jpg">'


});

