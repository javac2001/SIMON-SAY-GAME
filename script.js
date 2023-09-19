let gameSequence = [];
let userSequence = [];

// ==================== GAME START | BUTTON FLASH | LEVEL UP
let head = document.querySelector(".heading-container");
let startGame = false;
let levelUp = 0;
let boxes = ["box1","box2","box3","box4"];

document.addEventListener("keypress", pressStartFunc);
function pressStartFunc(e) {
    if (startGame == false) {
        startGame = true;
        gameLevel();
    }
}

function gameLevel(){
    userSequence = [];
    levelUp++;
    head.innerHTML = `Level ${levelUp}`;
    let randomNum = Math.floor(Math.random()*4);
    let randomCLass = boxes[randomNum];
    let randomBox = document.querySelector(`.${randomCLass}`);
    gameSequence.push(randomCLass);
    console.log(gameSequence);
    btnFlash(randomBox);

}

function btnFlash(btn){
    btn.classList.add('flashBtn');
    setTimeout(() => {
        btn.classList.remove('flashBtn');
    }, 300);
}

// ==================== BOX ACTION
let allBox = document.querySelectorAll(".boxes");

for (box of allBox){
    box.addEventListener('click',btnPressFunc);
}

function btnPressFunc(){
    userBtnFlash(this)
    let userBox = this.getAttribute('id');
    userSequence.push(userBox);
    console.log(userSequence);
    checkSequence(userSequence.length - 1);
}

function userBtnFlash(userBtn){
    userBtn.classList.add('flashBtn');
    setTimeout(() => {
        userBtn.classList.remove('flashBtn');
    }, 80);
}

// ==================== SEQUENCE MATCHING

function checkSequence(gameIndex){
    if(userSequence[gameIndex] === gameSequence[gameIndex]){
        if(userSequence.length === gameSequence.length){
            setTimeout(gameLevel, 1000);
        }
    }else{
        head.innerHTML = "Game over! press any key to start the game";
    }
}
