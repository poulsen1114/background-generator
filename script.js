// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function SetGradient() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// 	css.textContent = body.style.background + ";";
// } 

// color1.addEventListener("input", SetGradient);

// color2.addEventListener("input", SetGradient);


// AI Generated Code and refactored once
// const body = document.querySelector("body");
// const css = document.querySelector("h3");
// const color1 = document.querySelector(".color1");
// const color2 = document.querySelector(".color2");

// function updateGradient() {
//     body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
//     css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", updateGradient);
// color2.addEventListener("input", updateGradient);

// updateGradient();

// AI Generated code bonus and refactored once

// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.
// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// 1.
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function SetGradient() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//     css.textContent = body.style.background + ";";
// } 

// function setInitialGradient() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// }

// color1.addEventListener("input", SetGradient);
// color2.addEventListener("input", SetGradient);

// window.addEventListener("load", setInitialGradient);

// 2.
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function SetGradient() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//     css.textContent = body.style.background + ";";
// } 

// function setInitialGradient() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
//     css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", SetGradient);
// color2.addEventListener("input", SetGradient);

// window.addEventListener("load", setInitialGradient);

// 3.

// window.onload = function(){
//     var css = document.querySelector("h3");
//     var color1 = document.querySelector(".color1");
//     var color2 = document.querySelector(".color2");
//     var body = document.getElementById("gradient");
//     var randomButton = document.getElementById("random");

//     function SetGradient() {
//         body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//         css.textContent = body.style.background + ";";
//     } 

//     function setInitialGradient() {
//         body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
//         css.textContent = body.style.background + ";";
//     }

//     function getRandomColor() {
//         return '#' + Math.floor(Math.random() * 16777215).toString(16);
//     }

//     function setRandomColors() {
//         color1.value = getRandomColor();
//         color2.value = getRandomColor();
//         SetGradient();
//     }

//     color1.addEventListener("input", SetGradient);
//     color2.addEventListener("input", SetGradient);
//     randomButton.addEventListener("click", setRandomColors);

//     setInitialGradient();
// }

// 3 with reformatting
window.onload = function() {
    var css = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");
    var randomButton = document.getElementById("random");

    function setGradient() {
        body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
        css.textContent = body.style.background + ";";
    }

    function setInitialGradient() {
        body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
        css.textContent = body.style.background + ";";
    }

    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    function setRandomColors() {
        color1.value = getRandomColor();
        color2.value = getRandomColor();
        setGradient();
    }

    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);
    randomButton.addEventListener("click", setRandomColors);

    setInitialGradient();
};


