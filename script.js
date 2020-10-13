let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() *10); //генерирует от 0 до 9 включительно
}

const getAbsoluteDistance = (val1,val2) => {
    return Math.abs(val1 - val2);
}

const compareGuesses = (huGe, coGe, secGe) => {
    if (huGe > 9 || huGe < 0) {
        alert("Invalid number; computer wins");
        return false;
    }

if(getAbsoluteDistance(coGe, secGe) < getAbsoluteDistance(huGe,secGe)) {
    return false; //комп выиграл
}
else return true; //выиграл человек
}

const updateScore = winner => {
    if (winner==="computer") {computerScore++;}
    else {humanScore++;}
}

const advanceRound = () => {
    return currentRoundNumber++;
}