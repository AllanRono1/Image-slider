const images = [
    "./images/square1.jpg",
    "./images/square2.jpg",
    "./images/square3.jpg",
    "./images/square4.jpg",
    "./images/square5.jpg",
    "./images/square6.jpg",
    "./images/square6.jpg"
]

const imageEl = document.getElementById("img-el")
const buttonEl = document.getElementById("button-el")
const previousButton = document.getElementById("back-el")
let currentIndex = 0


buttonEl.addEventListener("click", () => {
    currentIndex += 1
    console.log(currentIndex)

    const lastIndex = images.length - 1
    if(currentIndex !== lastIndex) {
        imageEl.src = images[currentIndex]
    } else {
        currentIndex = 0
        imageEl.src = images[currentIndex]
    }

})

previousButton.addEventListener("click", () => {
    currentIndex -= 1

    if(currentIndex > 0) {
    imageEl.src = images[currentIndex]
    console.log(currentIndex)
    } else {
        currentIndex = 0
        imageEl.src = images[currentIndex]
    }
})
