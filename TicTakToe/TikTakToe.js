class gameState {

    crossTurn = true;
    gameField;
    createGameField(container) {
        this.gameField = document.createElement("ul");
        this.gameField.classList.add("field", "elementIsBlocked");
        container.append(this.gameField);
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("li");
            cell.classList.add("cell");
            this.gameField.append(cell);
            const gamecel = document.createElement("div");
            gamecel.classList.add("gamecell");
            cell.append(gamecel);
        }
        return this.gameField
    }

    getGameField() {
        return this.gameField;
    }

    addElement(cell) {
        if (!cell.classList.contains("elementIsBlocked")) {
            cell.classList.add("elementIsBlocked");
            if (this.crossTurn) {
                cell.classList.add("fab", "fa-apple", "Apple");
                this.crossTurn = !this.crossTurn;
            } else {
                cell.classList.add("fab", "fa-android", "Android");
                this.crossTurn = !this.crossTurn;
            }
        }
    }

}

class gameMode {

    constructor(container) {
        this.container = container;
    }

    elements = document.getElementsByClassName("gamecell");
    
    getGameField(){
        gameField = container.querySelector("ul")
    }
    
   
    

    winConditional(className) {
        //Horizontal condition
        for (let i = 0; i < 7; i += 3) {
            if (this.elements[i].classList.contains(className) && this.elements[i + 1].classList.contains(className) && this.elements[i + 2].classList.contains(className)) {
                console.log(`${className} Win`);
                this.elements[i].style.color = 'red';
                this.elements[i + 1].style.color = 'red';
                this.elements[i + 2].style.color = 'red';
                return this.gameOver();
            }
        }
        //Vertical condition
        for (let i = 0; i < 4; i++) {
            if (this.elements[i].classList.contains(className) && this.elements[i + 3].classList.contains(className) && this.elements[i + 6].classList.contains(className)) {
                console.log(`${className} Win`);
                this.elements[i].style.color = 'red';
                this.elements[i + 3].style.color = 'red';
                this.elements[i + 6].style.color = 'red';
                return this.gameOver();
            }
        }
        //Diagonal condition
        if (this.elements[0].classList.contains(className) && this.elements[4].classList.contains(className) && this.elements[8].classList.contains(className)) {
            console.log(`${className} Win`);
            this.elements[0].style.color = 'red';
            this.elements[4].style.color = 'red';
            this.elements[8].style.color = 'red';
            return this.gameOver();
        }
        if (this.elements[2].classList.contains(className) && this.elements[4].classList.contains(className) && this.elements[6].classList.contains(className)) {
            console.log(`${className} Win`);
            this.elements[2].style.color = 'red';
            this.elements[4].style.color = 'red';
            this.elements[6].style.color = 'red';
            return this.gameOver();
        }
    }

    gameOver() {
        for (this.element of this.elements) {
            if (!this.element.classList.contains("elementIsBlocked")) {
                this.element.classList.add("elementIsBlocked");
            }
        }
        const gameOverContainer = document.createElement("div.gameOver");
        return true;
    }

    startGame() {

    }

    clean() {
        this.container.removeChild(this.gameField);
    }
}

const container = document.querySelector("div.container");
let gameInst = new gameState();
gameInst.createGameField(container);
let gameMode1 = new gameMode(container);

function onPageLoaded() {    
    gameMode1.gameField.addEventListener('click', (e) => {
        let cell = e.target;
        gameInst.addElement(cell);
        gameMode1.winConditional("Apple");
        gameMode1.winConditional("Android");
    });
}

const btn = document.querySelector("button.fncBtn");
btn.addEventListener('click', () => {
    gameMode1.clean();
    gameInst.createGameField(container);
    onPageLoaded();
})

document.addEventListener("DOMContentLoaded", onPageLoaded);