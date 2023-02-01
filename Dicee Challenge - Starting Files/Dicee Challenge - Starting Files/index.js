var randomNumber1 = (Math.floor(Math.random()*6))+1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// for second image

var randomNumber2=(Math.floor(Math.random()*6))+1;

var randomImageSource2="images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//player 1 wins

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=("Player 1 Wins !! 🥇");
    //1 wins
}
else if(randomNumber2>randomNumber1){
    //2 wins
    document.querySelector("h1").innerHTML=("Player 2 Wins !! 🥇");
}
else{
    document.querySelector("h1").innerHTML=("It's a DRAW !! 🎐");
}



