const player1Symbol = "O"
const player2Symbol = "X"
let isPlayer1sTurn = true


const onDivClick = (div)=> {
    console.log("clicked");
    if (isPlayer1sTurn){
        div.innerHTML = player1Symbol
    }else{
        div.innerHTML = player2Symbol
    }
    isPlayer1sTurn = !isPlayer1sTurn
}

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");


const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9]

divs.forEach(function(div, index) {
    div.addEventListener("click", ()=>{onDivClick(div)});
});

const resetBoard = (divs)=>{
    divs.forEach(function(div, index){
        div.innerHTML = ""
    })
    isPlayer1sTurn = true
}

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", ()=>{resetBoard(divs)})