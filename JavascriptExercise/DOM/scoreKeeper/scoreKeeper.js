var p1_score = document.querySelector("#p1_score");
var p2_score = document.querySelector("#p2_score");
var score_board = document.getElementById("score_board");
var playing_to = document.getElementById("playing_to");
var playing_to_score = document.getElementById("score_playing_to");
var player_one_button = document.getElementById("player_one");
var player_two_button = document.getElementById("player_two");
var reset_button = document.getElementById("reset");
var play = "Playing to: ";
var game_over = false;
var p1Score = 0;
var p2Score = 0;
var winnigScore = 5;

playing_to_score.addEventListener("input", function (e) {
    var value = e.target.value ? e.target.value : 0;
    playing_to.textContent = "Playing to: " + value;
    winnigScore = value;
});

player_one_button.addEventListener("click", function () {
    if (!game_over) {
        updateScoreBoard("playerone");
    }
});
player_two_button.addEventListener("click", function () {
    if (!game_over) {
        updateScoreBoard("playertwo");
    }
});

function updateScoreBoard(player) {
    player === "playerone" ? p1Score++ : p2Score++;
    if (p1Score == winnigScore) {
        game_over = true;
        p1_score.classList.add("winner");
        playing_to_score.setAttribute("disabled", true);
    } else if (p2Score == winnigScore) {
        game_over = true;
        p2_score.classList.add("winner");
        playing_to_score.setAttribute("disabled", true);
    }
    p1_score.textContent = p1Score;
    p2_score.textContent = p2Score;
}

reset_button.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    p1_score.textContent = p1Score;
    p2_score.textContent = p2Score;
    game_over = false;
    playing_to_score.setAttribute("disabled", false);
    p1_score.classList.remove("winner");
    p2_score.classList.remove("winner");
    playing_to_score.removeAttribute("disabled");
});