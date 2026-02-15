const rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', () => {
    // diceSize will be d6, d10, d20, etc
    // diceAmt will be the amount of die, might be limited, min 1
    generateRandomNumber(diceSize, diceAmt)
});

function generateRandomNumber(diceSize, diceAmt) {
    let numbers = []
    for (dice of diceAmt) {
        numbers.push(Math.random() * (diceSize - 1) + 1);
    }
    return numbers;
}