let low = 1,
    high = 10,
    i = 0;

let secretNum = null,
    guessNum = null;

const play = function () {
    secretNum = Math.floor(Math.random() * (high - low + 1)) + low;
    while (i < 3) {
        guessNumber()
        if (guessNum != 0) {
            if (guessNum == secretNum) {
                alert("You Win!!!!");
                break;
            }
            else if (guessNum > secretNum) {
                alert("Too high!!!")
            } else {
                alert("Too low!!!")
            }
        }
        i++;
    }
    if(guessNum != secretNum){
        alert("You Lose!!!!!")
    }

}

const guessNumber = function () {
    guessNum = prompt("Enter a Number between" + low + " and " + high);
    return guessNum;
}
