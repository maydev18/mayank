
/*
var randomNumber1=Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage= "dice"+ randomNumber1 + ".png";
var randomImgSource="images/"+ randomDiceImage;


var image1=document.querySelectorAll("imag")[0];
image1.setattribute("src",randomImgSource);




var randomNumber2=Math.floor(Math.random() * 6)+1 ;
var randomImgSource2="images/dice"+ randomNumber2+".png";
document.querySelectorAll("imag")[1].setAttribute("src",randomImgSource2);



*/

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLayer 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}