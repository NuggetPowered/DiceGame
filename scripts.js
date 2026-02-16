const rollButton = document.getElementById('rollButton');
const clearButton = document.getElementById('clearButton');
const diceArea = document.querySelector('.diceArea');

rollButton.addEventListener('click', () => {
    diceArea.innerHTML = '';

    let diceSize = document.getElementById('diceSize').value;
    let diceAmt = document.getElementById('diceAmt').value;
    results = generateRandomNumber(diceSize, diceAmt);
    for (let r of results) {
        let span = document.createElement('span');
        span.textContent = r;
        diceArea.append(span);
    }
});

clearButton.addEventListener('click', () => {
    diceArea.textContent = '';
})

function generateRandomNumber(diceSize, diceAmt) {
    let numbers = []
    for (dice of diceAmt) {
        numbers.push(Math.floor(Math.random() * diceSize + 1));
    }
    return numbers;
}