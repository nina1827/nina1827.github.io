console.log("What an exciting website"); 
window.alert("U clicked on my AMAZING website"); //bei öffnen der website ein alert

window.onload = function () //erscheint erst, sobald seite fertig geladen ist
{
  console.log("Buttooooooooons");
  document.getElementById("ID1").addEventListener("click", Click)
  document.getElementById("ID2").addEventListener("click", addPara)
  document.getElementById("ID3").addEventListener("click", classchange)
  let buttonelement:HTMLElement = document.createElement("button");
  buttonelement.innerHTML = "Klick mich";
  buttonelement.addEventListener("click", Rechnung);
  document.getElementById("test").appendChild(buttonelement);
}


function Rechnung()
{
let vorname : string = "KITKAT"; //let variablenname:typ="mimimi";
console.log(vorname);
let nachname : string ="NINA"; 
console.log(nachname);
let number1 : number = 1827;
console.log(number1);
let number2 : number = 69;
console.log(number2);
console.log(vorname+nachname); //addition von 2 strings
console.log(number1+number2); //addition von 2 numbers
console.log(vorname+number1); //addition von string und number
document.getElementById("ID3").innerHTML = number2.toString();
}

function Click()
{
    console.log("buttons are fab-fab-fabulous");
    document.getElementById("ID1").innerHTML="Good job u clicked me" //änderung bei click

}

function addPara() // generieren von neuen Elementen
{
  let newPara = document.createElement("P");
  let position = document.getElementById("body")  
  position.appendChild(newPara);
  newPara.innerHTML="Surprise!!! Another element appeared";
  console.log("Woooooooooh another element!")
}

function classchange() //ändert klasse eines html objekts
{
console.log("I changed my class uwu")
document.getElementById("ID3").innerHTML="I changed my class UwU";

document.getElementById("ID3").className="new class!"
}