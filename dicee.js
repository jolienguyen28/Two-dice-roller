var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var imagenumber1 = "images/dice"+randomNumber1+".png";
var imagenumber2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",imagenumber1);
document.querySelector(".img2").setAttribute("src",imagenumber2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 wins!";
}
