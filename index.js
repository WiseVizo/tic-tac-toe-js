const player1Symbol = "O"
const player2Symbol = "X"
let isPlayer1sTurn = true


const onDivClick = (div, divs)=> {
    if (div.innerHTML) return 0;
    if (isPlayer1sTurn){
        div.innerHTML = player1Symbol
    }else{
        div.innerHTML = player2Symbol
    }
    isPlayer1sTurn = !isPlayer1sTurn
    readGameState(divs)
    checkWins()

}
const resetBoard = (divs)=>{
    divs.forEach(function(div, index){
        div.innerHTML = ""
        GAME_STATE[index] = ""
    })
    isPlayer1sTurn = true

    const wins = [rowWins, colWins, diagonalWins]
    wins.forEach(function(win, index){
        win.forEach(function(list, index){
            for(let x=0; x<3; x++){
                list[x] = 0
            }
        })
    })

    const lines = ["row", "col", "dg"]
    lines.forEach(function(line, _){
        if(line == "dg"){
            for(let x=0; x<2; x++){
                let htmlLine = document.getElementById(`${line}-${x}`)
                htmlLine.classList.add("hide")
            }
        }else{
            for(let x=0; x<3; x++){
                let htmlLine = document.getElementById(`${line}-${x}`)
                htmlLine.classList.add("hide")
            }
        }
    })
    
}

const fillBoard = (rowsData, divs)=>{
    divs.forEach(function(div, index){
        div.innerHTML = rowsData[index]
    })
}

const readGameState = (divs)=>{
    divs.forEach(function(div, index){
        GAME_STATE[index] = div.innerHTML
    })
}

const checkWins = ()=>{
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    const cols = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
    const diagonals = [[0, 4, 8], [2, 4, 6]]
    
    rows.forEach(function(row, index){   
        for(let x = 0; x<3; x++){
            if (GAME_STATE[row[x]]==player1Symbol){
                rowWins[index][x] = 1
            }
            if (GAME_STATE[row[x]]==player2Symbol){
                rowWins[index][x] = -1
            }
        }
    })
    cols.forEach(function(col, index){   
        for(let x = 0; x<3; x++){
            if (GAME_STATE[col[x]]==player1Symbol){
                colWins[index][x] = 1
            }
            if (GAME_STATE[col[x]]==player2Symbol){
                colWins[index][x] = -1
            }
            
        }
    })
    diagonals.forEach(function(diagonal, index){   
        for(let x = 0; x<3; x++){
            if (GAME_STATE[diagonal[x]]==player1Symbol){
                diagonalWins[index][x] = 1
            }
            if (GAME_STATE[diagonal[x]]==player2Symbol){
                diagonalWins[index][x] = -1
            }
        }
    })

    
    rowWins.forEach(function(rows, index){
        let sum = 0
        rows.forEach(function(item, _){
            sum = sum + item
        })

        if(sum==-3){
            Win("row", index, player2Symbol)
        }
        if(sum==3){
            Win("row", index, player1Symbol)
        }
    })
    colWins.forEach(function(cols, index){
        let sum = 0
        cols.forEach(function(item, _){
            sum = sum + item
        })
 
        if(sum==-3){
            Win("col", index, player2Symbol)
        }
        if(sum==3){
            Win("col", index, player1Symbol)
        }
    })
    diagonalWins.forEach(function(digonals, index){
        let sum = 0
        digonals.forEach(function(item, _){
            sum = sum + item
        })
        if(sum==-3){
            Win("dg", index, player2Symbol)
        }
        if(sum==3){
            Win("dg", index, player1Symbol)
        }
    })

}

const Win = (type, index, playersymbol)=>{
    const line = document.getElementById(`${type}-${index}`)
    line.classList.remove("hide")
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
    div.addEventListener("click", ()=>{onDivClick(div, divs)});
});

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", ()=>{resetBoard(divs)})

const GAME_STATE = ["X", "", "O", "X", "", "", "", "", ""]

const rowWins = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

const colWins = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]


const diagonalWins = [[0, 0, 0], [0, 0, 0]]


