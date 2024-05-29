function saveUsername() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    document.getElementById("output").innerHTML = "Congratulations, " + username + "! Your name has been saved.";
}