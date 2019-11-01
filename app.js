var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice(){
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r" ) return "Rock";
    if (letter === "p") return "paper";
    return "scissors";
}

function win(userChoice , computerChoice  ){
    userScore++
    userScore_span.innerHTML = userScore;
    var userChoice_div = document.getElementById(userChoice);
    var smallUserWod = "User".fontsize(3).sub();
    var smallCompWord = "Comp.".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWod + "  BEATS  " + convertToWord(computerChoice) + smallCompWord + "  YOU WINS 😇👅";
    userChoice_div.classList.add('green-glow');
    setTimeout (function (){ userChoice_div.classList.remove("green-glow")}, 500);
}

function lose(userChoice, computerChoice){
    computerScore++
    computerScore_span.innerHTML = computerScore;
    var userChoice_div = document.getElementById(userChoice);
    var smallUserWod = "User".fontsize(3).sub();
    var smallCompWord = "Comp.".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWod + "  LOSSES TO  " + convertToWord(computerChoice) + smallCompWord + " YOU LOSE 💩💩";
    userChoice_div.classList.add('red-glow');
    setTimeout (function (){ userChoice_div.classList.remove("red-glow")}, 500);

}

function draw(userChoice, computerChoice){
    var smallUserWod = "User".fontsize(3).sub();
    var userChoice_div = document.getElementById(userChoice);
    var smallCompWord = "Comp.".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWod + "  EQUALS TO  " + convertToWord(computerChoice) + smallCompWord + " ITS A DRAW";
    userChoice_div.classList.add('gray-glow');
    setTimeout (function (){ userChoice_div.classList.remove("gray-glow")}, 500);
}



function game(userChoice){
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":        
        case "sr":
        lose(userChoice, computerChoice );
            break;

        case "rr":
        case "pp":    
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}


function main() {
    rock_div.addEventListener("click", function(){
        game("r")
    });
    
    paper_div.addEventListener("click", function(){
        game("p")
    });
    
    scissors_div.addEventListener("click", function(){
        game("s")
    });
}

main();