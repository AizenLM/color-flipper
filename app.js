const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//  get the button element
const btn = document.getElementById("btn");
//Get the color element
const color = document.querySelector(".color");
btn.addEventListener("click", () => { 
    // generate a random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});