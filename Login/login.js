function login() {
var username = document.getElementById("username");
var pass = document.getElementById("password");
if (username.value == "") {
alert("Please enter username");
} else if (pass.value  == "") {
alert("Please enter password");
} else if(username.value == "blank" && pass.value == "allan0706"){
window.location.href="welcome.html";
} else {
alert("Please enter right username or password")
}
}