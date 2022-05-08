let body = document.querySelector("body");
let css = document.querySelector(".css");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let randomBtn = document.querySelector(".random");
// random gradient each time it's loaded
randomizeColorValues();
updateGradient();
function updateGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;

    css.textContent = `${body.style.background};`;  // return the text content of the specified node and all its descendants.
}
function getRandomColor() {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
        //Math.radom-> returns a floating-point, pseudo-random number in the range 0 to less than 1
        // multiplied by 15, for choosing out of 16 letters (0 to 15)
    }
    return color;
}
function randomizeColorValues() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    updateGradient();
}
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
randomBtn.addEventListener("click", randomizeColorValues);

