
var randomNo1 = Math.floor(Math.random()*6);
randomNo1 +=1;
var x = "./images/dice" +randomNo1+ ".png"
document.querySelector("img").setAttribute("src",x);

var randomNo2 = Math.floor(Math.random()*6);
randomNo2 +=1;
var y = "./images/dice" +randomNo2+ ".png"
document.getElementsByClassName("img2")[0].setAttribute("src",y);

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}