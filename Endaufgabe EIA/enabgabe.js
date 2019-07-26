let DrawCards = [];
let TableCard = [];
let CPUHand = [];
let PlayerHand = [];
window.onload = function () {
    document.getElementById("DrawCards").addEventListener("click", DrawCard, false);
    Play();
};
function DrawCard() {
    if (CardCheck(PlayerHand) == false) {
        PlayerHand.push(DrawCards[DrawCards.length - 1]);
        DrawCards.splice(DrawCards.length - 1, 1);
        updateHTML("PlayerHand");
        updateHTML("DrawCards");
    }
    if (CardCheck(PlayerHand) == false) {
        EnemyTurn();
    }
}
function CardCheck(array) {
    let suitableCard = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].CardColor == TableCard[TableCard.length - 1].CardColor || array[i].CardValue == TableCard[TableCard.length - 1].CardValue) {
            suitableCard = true;
            break;
        }
    }
    return suitableCard;
}
function updateHTML(Target) {
    ClearHTML(Target);
    if (Target == "PlayerHand") {
        for (let i = 0; i < PlayerHand.length; i++) {
            CardHTML(PlayerHand[i], "PlayerHand", i);
        }
    }
    if (Target == "CPUHand") {
        for (let i = 0; i < CPUHand.length; i++) {
            HiddenCard(CPUHand[i], "CPUHand", i);
        }
    }
    if (Target == "TableCard") {
        CardHTML(TableCard[TableCard.length - 1], "TableCard", TableCard.length - 1);
    }
    if (Target == "DrawCards") {
        HiddenCard(DrawCards[DrawCards.length - 1], "DrawCards", DrawCards.length - 1);
    }
}
function ClearHTML(Target) {
    let Element = document.getElementById(Target);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}
function CardHTML(Card, Target, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Card" + " " + Card.CardColor);
    document.getElementById(Target).appendChild(holdingDiv);
    let Number = document.createElement("p");
    Number.setAttribute("class", "CardValue");
    Number.innerHTML = "" + Card.CardValue;
    holdingDiv.appendChild(Number);
    if (Target == "PlayerHand") {
        holdingDiv.addEventListener("click", function () { CardPut(Card, index); }, false);
    }
}
function HiddenCard(card, Target, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "card" + " " + "Hidden");
    document.getElementById(Target).appendChild(holdingDiv);
}
function CardPut(card, index) {
    if (card.CardValue == TableCard[TableCard.length - 1].CardValue || card.CardColor == TableCard[TableCard.length - 1].CardColor) {
        TableCard.push(card);
        PlayerHand.splice(index, 1);
        updateHTML("PlayerHand");
        updateHTML("TableCard");
        EnemyTurn();
    }
}
function EnemyTurn() {
    let i = 0;
    for (i; i < CPUHand.length; i++) {
        if (CPUHand[i].CardColor == TableCard[TableCard.length - 1].CardColor || CPUHand[i].CardValue == TableCard[TableCard.length - 1].CardValue) {
            TableCard.push(CPUHand[i]);
            CPUHand.splice(i, 1);
            updateHTML("TableCard");
            updateHTML("CPUHand");
            break;
        }
    }
    if (i >= CPUHand.length) {
        CPUHand.push(DrawCards[DrawCards.length - 1]);
        DrawCards.splice(DrawCards.length - 1, 1);
        updateHTML("DrawCards");
        updateHTML("CPUHand");
        if (CPUHand[CPUHand.length - 1].CardColor == TableCard[TableCard.length - 1].CardColor || CPUHand[CPUHand.length - 1].CardValue == TableCard[TableCard.length - 1].CardValue) {
            TableCard.push(CPUHand[CPUHand.length - 1]);
            CPUHand.splice(CPUHand.length - 1, 1);
            updateHTML("TableCard");
            updateHTML("CPUHand");
        }
    }
}
function GenerateCards() {
    let Color;
    for (let i = 1; i <= 8; i++) {
        for (let c = 1; c <= 4; c++) {
            if (c == 1) {
                Color = "Blue";
            }
            if (c == 2) {
                Color = "Red";
            }
            if (c == 3) {
                Color = "Yellow";
            }
            if (c == 4) {
                Color = "Green";
            }
            let NewCard = {
                CardColor: Color, CardValue: i
            };
            DrawCards.push(NewCard);
        }
    }
    console.log(DrawCards);
}
function shuffle(array) {
    let currentIndex = array.length;
    let TempValue;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        TempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = TempValue;
    }
    return array;
}
function Play() {
    GenerateCards();
    DrawCards = shuffle(DrawCards);
    for (let i = 0; i < 5; i++) {
        PlayerHand.push(DrawCards[i]);
        CPUHand.push(DrawCards[i + 5]);
    }
    TableCard.push(DrawCards[10]);
    DrawCards.splice(0, 11);
    console.log(PlayerHand);
    console.log(CPUHand);
    console.log(DrawCards);
    for (let i = 0; i < PlayerHand.length; i++) {
        CardHTML(PlayerHand[i], "PlayerHand", i);
    }
    for (let i = 0; i < CPUHand.length; i++) {
        HiddenCard(CPUHand[i], "CPUHand", i);
    }
    GameOver();
    CardHTML(TableCard[TableCard.length - 1], "TableCard", TableCard.length - 1);
    HiddenCard(DrawCards[DrawCards.length - 1], "DrawCards", DrawCards.length - 1);
}
function GameOver() {
    if (Array.isArray(PlayerHand) && PlayerHand.length) {
    }
    else {
        alert("You Win");
    }
}
//# sourceMappingURL=enabgabe.js.map