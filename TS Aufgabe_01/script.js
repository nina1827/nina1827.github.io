console.log("What an exciting website");
window.alert("U clicked on my AMAZING website"); //bei öffnen der website ein alert
window.onload = function () {
    console.log("Buttooooooooons");
    document.getElementById("ID1").addEventListener("click", Click);
    document.getElementById("ID2").addEventListener("click", addPara);
    document.getElementById("ID3").addEventListener("click", classchange);
    let buttonelement = document.createElement("button"); //neuen Button generieren, ohne in html zu erstellen
    buttonelement.innerHTML = "Try me ~ Ill show u some numbers hehe";
    buttonelement.addEventListener("click", Rechnung);
    document.getElementById("test").appendChild(buttonelement);
};
function Click() {
    console.log("buttons are fab-fab-fabulous");
    document.getElementById("ID1").innerHTML = "Good job u clicked me POGGERS"; //änderung bei click
}
function Rechnung() {
    let vorname = "KITKAT"; //let variablenname:typ="mimimi"
    console.log(vorname);
    let nachname = "NINA";
    console.log(nachname);
    let number1 = 1827;
    console.log(number1);
    let number2 = 69;
    number1 = 2718;
    console.log(number1);
    console.log(number2);
    console.log(vorname + nachname); //addition von 2 strings
    console.log(number1 + number2); //addition von 2 numbers
    console.log(vorname + number1); //addition von string und number
    document.getElementById("ID3").innerHTML = number2.toString();
}
function classchange() {
    console.log("I changed my class uwu");
    document.getElementById("ID3").innerHTML = "I changed my class UwU";
    document.getElementById("ID3").className = "new class!";
}
function addPara() {
    let newPara = document.createElement("P");
    let position = document.getElementById("body");
    position.appendChild(newPara);
    newPara.innerHTML = "Surprise!!! Another element appeared";
    console.log("Woooooooooh another element!");
}
//# sourceMappingURL=script.js.map