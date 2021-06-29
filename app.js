const colors = ["red", "blue", "green", "yellow", "orange"];
var btn = document.getElementById("btn");
var color = document.getElementById("color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}