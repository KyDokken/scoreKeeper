var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#p3");
var p3Button = document.querySelector("#p3");
var s1Display = document.querySelector("#s1");
var s2Display = document.querySelector("#s2");
var numberInput = document.querySelector("input");
var para = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

console.log(p1Button);
// Add to player 1 score
p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            s1Display.classList.add("winner");
            gameOver = true;
        }
        s1Display.textContent = p1Score;
    }


});
// Add to player 2 score
p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
        }
        s2Display.textContent = p2Score;
    }
});

// Reset button
resetButton.addEventListener("click", function () {
    p1score = 0;
    p2Score = 0;
    s1Display.textContent = 0;
    s2Display.textContent = 0;
    s1Display.classList.remove("winner");
    s2Display.classList.remove("winner");
    gameOver = false;
});

// Input #
numberInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = numberInput.value;
    winningScore = numberInput.value;

});
