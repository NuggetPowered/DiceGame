const rollButton = document!.getElementById('rollButton')!;
const clearButton = document!.getElementById('clearButton')!;
const diceArea = document!.getElementById('diceArea')!;
const diceSizeElem = document!.getElementById('diceSize')!;
const diceAmt = document!.getElementById('diceAmt')!;

type DiceTuple = [Dice, HTMLDivElement];
let activeDice: DiceTuple[] = [];

rollButton!.addEventListener('click', () => {
    for(let die of activeDice) {
        let val = die[0].roll();
        die[1].innerText = val + "";
    }
});

clearButton.addEventListener('click', () => {
    diceArea.innerHTML = '';
})

function generateRandomNumber(diceSize: number) {
    return Math.floor(Math.random() * diceSize + 1);
}


diceSizeElem.addEventListener('change', update);

diceAmt.addEventListener('change', update);

function update() {
    diceArea.innerHTML = "";
    activeDice = [];

    console.log("changed dice amount");
    for (let i = 0; i < Number(diceAmt.innerText); i++) {
        let diceObj = new Dice(Number(diceSizeElem!.innerText!));

        let die = document.createElement('div');
        die.className = "dice";
        die.textContent = i+"";
        diceArea.append(die);

        activeDice.push([diceObj, die]);
    }
}

class Dice {
    public readonly size: number;
    private value: number;

    public constructor(size: number) {
        this.size = size;
        this.value = this.roll();
    }    

    public roll() {
        return Math.floor(Math.random() * this.size + 1);
    }

    public getValue() {
        return this.value;
    }
};

console.log("yooooo um");
window.onload = update;