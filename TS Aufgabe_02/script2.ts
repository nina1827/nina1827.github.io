console.log("Hello")
window.alert("Clicking on this page will destroy ur pc");

window.onload = function ()
{

document.getElementById("button1").addEventListener("mouseover", buggybutton)

}

function buggybutton()
{
document.getElementById("button1").innerHTML="skrrrr bugs"    
}