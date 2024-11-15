

// function change(){
//     let inpData=document.getElementById("inpData").value;
// let a=document.getElementById("hData");
// a.innerHTML=inpData;
// }



function checkAns(){
let randomNumber=Math.floor(Math.random()*10)+1;
let guessedNumber=parseInt(document.getElementById("inpData").value);
let ramdomData=document.getElementById("pData");
let parentDiv=document.getElementById("parentDiv");

if(randomNumber===guessedNumber){
    parentDiv.style.backgroundColor="green";
    ramdomData.innerHTML=`<h1>YOU WON!! THE CORRECT ANSWER IS ${randomNumber}</h1>`;
}
else {
    ramdomData.innerHTML=`<h1>YOU LOSE!! THE CORRECT ANSWER IS ${randomNumber}</h1>`;
    parentDiv.style.backgroundColor="red";
}

}



 

