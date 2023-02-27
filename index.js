
function Randomness(){
    var rand1=Math.random()*10;
    while(rand1>6){
        rand1=Math.random()*10;
    }
    rand1=Math.ceil(rand1);
    return rand1;

}

var r1=Randomness();
var r2=Randomness();

if(r1==1){
    document.getElementById("first").src="images/dice1.png";

}
else if(r1==2){
    document.getElementById("first").src="images/dice2.png";
}
else if(r1==3){
    document.getElementById("first").src="images/dice3.png";
}
else if(r1==4){
    document.getElementById("first").src="images/dice4.png";    
}
else if(r1==5){
    document.getElementById("first").src="images/dice5.png";}
else{
    document.getElementById("first").src="images/dice6.png";
}




if(r2==1){
    document.getElementById("second").src="images/dice1.png";
}
else if(r2==2){
    document.getElementById("second").src="images/dice2.png";
}
else if(r2==3){
    document.getElementById("second").src="images/dice3.png";
}
else if(r2==4){
    document.getElementById("second").src="images/dice4.png";    
}
else if(r2==5){
    document.getElementById("second").src="images/dice5.png";
}
else{
    document.getElementById("second").src="images/dice6.png";
}

if(r1>r2){
    document.querySelector("h2").innerHTML = ("r1 wins!")
}
else if(r1==r2){
    document.querySelector("h2").innerHTML = ("Tie!")
}
else{
    document.querySelector("h2").innerHTML = ("r2 wins!")
}

