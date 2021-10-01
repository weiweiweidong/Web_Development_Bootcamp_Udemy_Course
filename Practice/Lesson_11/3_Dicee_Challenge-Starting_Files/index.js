var randomNumber1 = Math.floor(Math.random()*6+1);
console.log("色子1的值为："+randomNumber1);

var diceString1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceString1);

var randomNumber2 = Math.floor(Math.random()*6+1);
console.log("色子2的值为："+randomNumber2);

var diceString2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceString2);

if(randomNumber1 == randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent ="Player 1 Wins!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent ="Player 2 Wins!";
}else {
  console.log("error!");
}
