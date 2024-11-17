

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
    ramdomData.innerHTML=`<h1>YOU WON!! THE NUMBER WAS ${randomNumber}</h1>`;
    alert(`YOU WON!! THE NUMBER WAS ${randomNumber}`)
}
else {
    ramdomData.innerHTML=`<h1>YOU LOSE!! THE NUMBER WAS ${randomNumber}</h1>`;
    parentDiv.style.backgroundColor="red";
}

}



 

