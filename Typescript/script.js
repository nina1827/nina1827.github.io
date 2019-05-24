console.log("What an exciting website");
window.alert("U clicked on my AMAZING website"); //bei öffnen der website ein alert
window.onload = function () {
    console.log("Buttooooooooons");
    Rechnung();
    document.getElementById("ID1").addEventListener("click", Click);
    document.getElementById("ID2").addEventListener("click", addPara);
    document.getElementById("ID3").addEventListener("click", classchange);
};
function Rechnung() {
    let vorname = "KITKAT"; //let.variablenname:typ="mimimi";
    console.log(vorname);
    let nachname = "NINA";
    console.log(nachname);
    let number1 = 1827;
    console.log(number1);
    let number2 = 69;
    console.log(vorname + nachname); //addition von 2 strings
    console.log(number1 + number2); //addition von 2 numbers
    console.log(vorname + number1); //addition von string und number
    /*number2 = 31;
    console.log(number2);*/
}
function Click() {
    console.log("buttons are fab-fab-fabulous");
    document.getElementById("ID1").innerHTML = "Good job u clicked me"; //änderung bei click
}
function addPara() {
    let newPara = document.createElement("P");
    let position = document.getElementById("body");
    position.appendChild(newPara);
    newPara.innerHTML = "Another element appeared";
    console.log("Woooooooooh another element!");
}
function classchange() {
    console.log("I changed my class uwu");
    document.getElementById("ID3").innerHTML = "I changed my class UwU";
    document.getElementById("ID3").className = "new class!";
}
//# sourceMappingURL=script.js.map