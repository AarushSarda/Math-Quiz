function addUser() {
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;
    localStorage.setItem("player1" , player1_name);
    localStorage.setItem("player2" , player2_name);
    window.location = "quiz_page.html";
}