function playGame(move) {
    let playerMove = move;
    let background = document.querySelector(".background")
    let gameBackground = document.querySelector(".gameBackground")
    let playerChoice = document.querySelector(".playerChoice")
    background.remove();
    gameBackground.style.display = "flex";
    let playerImg = document.createElement("img")
    playerImg.src = `./${playerMove}.svg`
    playerImg.className = `${playerMove}Img`
    playerChoice.append(playerImg)

    
    let computerMove = ''
    let randomNumber = Math.random();
    if(randomNumber > 0 && randomNumber < 1 / 3){
        computerMove = 'rock'
    }
    else if(randomNumber > 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper'
    }
    else if(randomNumber > 2 / 3 && randomNumber < 1){
        computerMove = 'scissors'
    }

    console.log(`computerMove = ${computerMove}`);




    let computerChoice = document.querySelector(".computerChoice")
    let computerImg = document.createElement("img")
    computerImg.src = `./${computerMove}.svg`
    computerImg.className = `${computerMove}Img`
    computerChoice.append(computerImg)

    


   
    console.log(`working ${playerMove}`);
    


}




    