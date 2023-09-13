document.querySelector("button").addEventListener("click",function(){

   console.log("I Got " +this.innerHTML) ;


    var randomNumber1 = Math.floor(Math.random() * 6) +1;  // 1-6

var randomDiceImage= "dice" +randomNumber1 +".png";   // dice.png1 - dice.png6
var randomImageSrc = "images/" + randomDiceImage;

var image1 =document.querySelectorAll("Img")[0];

image1.setAttribute("src",randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6) +1;  

var randomDiceImage2= "dice"  +randomNumber2  +".png";
randomImageSrc2 ="images/" +randomDiceImage2;

var image2 =document.querySelectorAll("Img")[1];

image2.setAttribute("src",randomImageSrc2);


// if statements

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="play 1 win";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="play 2 win";
}else{
    document.querySelector("h1").innerHTML="Draw";
}


})




