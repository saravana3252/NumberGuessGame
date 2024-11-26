

// function change(){
//     let inpData=document.getElementById("inpData").value;
// let a=document.getElementById("hData");
// a.innerHTML=inpData;
// }


let attempt=0;
let maxAttempt=3;

function checkAns(){
let randomNumber=Math.floor(Math.random()*10)+1;
let guessedNumber=parseInt(document.getElementById("inpData").value);
let ramdomData=document.getElementById("pData");
let parentDiv=document.getElementById("parentDiv");
let btnReset=document.getElementById("btn-Reset");

attempt++;

if(randomNumber>5){
    randomNumber=randomNumber-5;
}

if(randomNumber===guessedNumber){
    parentDiv.style.backgroundColor="green";
    ramdomData.innerHTML=`<h1>🎉YOU WON!! THE NUMBER WAS ${randomNumber}</h1>`;
    btnReset.style.display="flex";
    attempt=0;
    setTimeout(()=>{alert(`YOU WON!!🎉 THE NUMBER WAS ${randomNumber}`),2000})
}
else {
    if(attempt<maxAttempt){
    ramdomData.innerHTML=`<h1>👎WRONG GUESS!! ${maxAttempt - attempt} attempts left</h1>`;
    }
    else{
    parentDiv.style.backgroundColor="red";
     ramdomData.innerHTML=`<h1>👎YOU LOSE!! THE NUMBER WAS ${randomNumber}</h1>`;
    btnReset.style.display="flex";
    }
}

}


function ResetAns(){
    document.getElementById("inpData").value="";
    document.getElementById("pData").innerHTML="";
    document.getElementById("parentDiv").style.backgroundColor="rgb(30, 64, 175)";
    document.getElementById("btn-Reset").style.display="none";
    attempt=0;

}


 

