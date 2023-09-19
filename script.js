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
    levelUp++;
    head.innerHTML = `Level ${levelUp}`;
    let randomNum = Math.floor(Math.random()*4);
    let randomCLass = boxes[randomNum];
    let randomBox = document.querySelector(`.${randomCLass}`);
    btnFlash(randomBox);

}

function btnFlash(btn){
    btn.classList.add('flashBtn');
    setTimeout(() => {
        btn.classList.remove('flashBtn');
    }, 300);
}