const images = [
    "./images/square1.jpg",
    "./images/square2.jpg",
    "./images/square3.jpg",
    "./images/square4.jpg",
    "./images/square5.jpg",
    "./images/square6.jpg"
]

const imageEl = document.getElementById("img-el")
const buttonEl = document.getElementById("button-el")
const previousEl = document.getElementById("previous-el")
let currentIndex = 0

buttonEl.addEventListener("click", () => {
    currentIndex += 1

    const lastIndex = images.length - 1
    if(currentIndex === lastIndex) {
        currentIndex = 0
        images.src = images[currentIndex]
    } else {
        imageEl.src = images[currentIndex]
    }
})