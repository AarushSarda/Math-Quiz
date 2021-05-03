player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player_1_name").innerHTML = player1_name + " : " ;
document.getElementById("player_2_name").innerHTML = player2_name + " : " ;
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = " Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_name ;

function send() {
    get_number_1 = document.getElementById("number_1").value;
    get_number_2 = document.getElementById("number_2").value;
    get_answer = parseInt(get_number_1) * parseInt(get_number_2);
    question = "<h4>" + get_number_1 + " x " + get_number_2 + "</h4>";
    input_box = "<br> Answer : <input type='number' id = 'input_box'>";
    check_button = "<br> <br> <button class = 'btn btn-success' onclick = 'check()'> Check </button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    user_answer = document.getElementById("input_box").value;
    if (user_answer == get_answer) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1 ;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1 ;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}