var secretnumber = parseInt(Math.radon() * 11);

function chutar() {
    var elementoResult = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == secretnumber) {
        elementoResult.innerHTML = "You won!";
        console.log("won");
    } else if (chute > 10 || chute < 0) {
        elementoResult.innerHTML = "Please type a number between 0 and 10";
    } else {
        elementoResult.innerHTML = "You lost :( The secret number is: " + secretnumber;
    }

}