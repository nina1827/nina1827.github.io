// ------- interfaces --------- //


// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName: string; // Name des Monsters
    monsterHealthPoints: number; // Lebenspunkte
    monsterExperience: number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier: string[]; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterWeapon: string;
    monsterimg: string;
    monsterLevel: number;

}


// ------- Variablen -------- //


let monsterHolder: string = "monsterHoldingCell";       // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName: string = "Random Bonobo";               // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP: number = 600;
let playerLevel: number = 3;
let playerHP: number = 100;                            // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel: number = 300;                     // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix: string[] = ["Shinigami-", "morderous ", "unheimliche ", "tödliche ", "disgustingly creepy ", "GEMA-"]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName: string[] = ["Wolf", "Drache", "Thingy", "Killerbee", "Hydra"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix: string[] = [" aus deinem Keller", " von der Lichtung der Zerstörung", " der unendlichen Weiten", " mit Krüppelbeinchen", " des Hasses", " deiner Mom"]; // length = 6, da hier 6 Einträge sind. Von 0-5.

let mImg: string[] = ["imgs/Augen.jpg", "imgs/boxer.jpg", "imgs/friends.jpg", "imgs/girl.jpg", "imgs/siblings.jpg"];
let monsterModifers: string[] = ["hat Spaß am twerken", "versteckt sich in Büschen", "Wodka-Fanatiker", "kommt immer zu spät zur Action", "ist süchtig nach Memes", "verseucht die Umgebung mit seinem Mundgeruch", "Depri", "professionelle Bepflanzer", "Bipolar", "verkauft illegale Digimon-Karten", "entführt kleine Hündchen"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterWeapons: string[] = ["Gabel", "Zahnstocher", "Katana", "Pistolen", "Fingernägel", "Kettensäge"];
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray: Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.

// ----------- Funktionen ----------- //

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    updatePlayerLevel();
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    document.getElementById("allMonsters").addEventListener("click", fightAllMonsters);
    document.getElementById("allWeakMonsters").addEventListener("click", fightAllWeakMonsters);
    document.getElementById("weakestMonster").addEventListener("click", fightWeakestMonster);
    // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
}
// document.getElementById("monsterSpawner").innerHTML="IM A BIG BAD MONSTER";
// console.log(document.getElementById("monsterSpawner").innerHTML);

// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let Random: number = getRNGNumber(3) + 1;
    console.log(monsterArray);
    for (let i: number = 0; i < Random; i++) {

        let newMonsterName: string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP: number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP: number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier: string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonsterWeapon: string = generateMonsterWeapon();
        let newMonsterLevel: number = generateMonsterLevel();
        let newMonsterImg: string = generateMonsterImg();
        let newMonster: Monster = {                                        // Monster wird erstellt.
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterLevel: newMonsterLevel,
            monsterModifier: newMonsterModifier,
            monsterWeapon: newMonsterWeapon, 
            monsterimg: newMonsterImg,


        };
        monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 

        console.log(monsterArray[0].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).

        updateHTML();                                                     // Triggere die Generierung von HTML
    }
}


// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(i: number) {
    let holdingDiv: HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + i);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterLevel: HTMLElement = document.createElement("p");
    monsterLevel.innerHTML = "Level: " + monsterArray[i - 1].monsterLevel;
    holdingDiv.appendChild(monsterLevel);

    let mWeapon: HTMLElement = document.createElement("p");
    mWeapon.innerHTML = "Waffe: " + monsterArray[i].monsterWeapon;
    holdingDiv.appendChild(mWeapon);

    let monsterExperience = document.createElement("p");
    monsterExperience.innerHTML = "Monster-XP: " + monsterArray[i].monsterExperience;
    holdingDiv.appendChild(monsterExperience);

    let monsterName: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[i].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterMod: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " + monsterArray[i].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterImg: HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[i].monsterimg);                 // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");   // Das alt für das Bild wird hier festgelegt.
    monsterImg.classList.add("monsterImg");
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterBtn: HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.

    let monsterCount: number = i;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function () {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.
}

function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMAll();
    console.log("U are about to get ur #ss kicked by " + getMonsterCount() + " monsters");
}

function getMonsterCount(): number {
    return monsterArray.length;

}

function monsterGenerateHTMAll() {
    for (let i: number = 1; i < monsterArray.length; i++) {
        monsterGenerateHTML(i);
    }
}

function clearMonsterCell() {
    let monsterDrawings: HTMLElement = document.getElementById(monsterHolder);
    while (monsterDrawings.firstChild) {
        monsterDrawings.removeChild(monsterDrawings.firstChild);
    }

}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber: number): number {
    let rngNumber: number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.                                                      // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
    return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
}

// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName(): string {
    let generatedMonsterName: string = ""; // Erstelle einen leeren String für das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber: number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP: number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}

function generateMonsterWeapon(): string {
    let rngNumber: number = getRNGNumber(monsterWeapons.length);
    return monsterWeapons[rngNumber];

}
function generateMonsterLevel(): number {
    let monsterLevel = getRNGNumber(10);
    return monsterLevel

}

function generateMonsterImg(): string {
    let rngNumber: number = getRNGNumber(mImg.length);
    return mImg[rngNumber];
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP: number = 100 + getRNGNumber(1000);
    console.log("Moster Exp to be attributed: " + tempMonsterXP)
    return tempMonsterXP;
}


// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer(): string[] {
    let tempMonsterMod: string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}



function fightAllMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {
        fightMonster(i);
    }
}

function fightAllWeakMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {
        if (playerLevel >= monsterArray[i - 1].monsterLevel) {
            fightMonster(i);
        }
    }
}

function fightWeakestMonster() {
    let tempWeakest = monsterArray.length;
    for (let i = monsterArray.length; i > 0; i--) {
        if (monsterArray[tempWeakest - 1].monsterLevel > monsterArray[i - 1].monsterLevel)
            tempWeakest = i;

    }
    fightMonster(tempWeakest);
}

function additionalWeapons() {
    console.log("new weapons will be generated");
    monsterWeapons.push("Bogen");
    monsterWeapons.push("Nokia-Handy");
    monsterWeapons.push("Schwiegermutter");
    monsterWeapons.push("Hitze");
    console.log("new weapons have been generated")
}


additionalWeapons()
console.log(monsterWeapons)

// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index: number) {
    if (playerLevel >= monsterArray[_index - 1].monsterLevel) {
        playerXP += monsterArray[_index - 1].monsterExperience;
        monsterArray.splice(_index - 1, 1);
   

    console.log("Spieler kämpft gegen Monster und gewinnt!");       // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    // Wird nächste Stunde erweitert.

    updateHTML();
    updatePlayerLevel();
}

    
    else if (playerLevel > 0) {
    (playerXP -= monsterArray[_index - 1].monsterExperience);
    (playerHP -= Math.floor(Math.random() * 10 + 10));
    if (playerHP == 0) {
        window.alert("Game Over! You got ur #ss kicked big time");
        window.alert("Good luck next time :^)");
        lost()
    }
    if (playerHP < 0) {
        window.alert("Game Over! You got ur #ss kicked big time");
        window.alert("Good luck next time :^)");
        lost()
    }
    console.log("Monster was too strong for random bonobo")
}
updatePlayerLevel();
updateHTML();
    // Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.


    //let tempLevel : number = Math.floor(playerXP / playerXPperLevel);                                                                           // Spieler-Level = XP / XPproLevel

    // document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    //console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
}
function updatePlayerLevel() {
    if (playerLevel < 0)
        playerLevel = 0;
    if (playerXP < 0) {
        window.alert("Game Over! You got ur #ss kicked big time");
        window.alert("Good luck next time :^)");
        lost()
    }
    if (playerLevel == 20 || playerLevel > 20) {
        window.alert("Congratz U~U U beat this stupid game ;*");
        win();
    }
    {
        playerLevel = Math.floor(playerXP / playerXPperLevel) + 1;
        console.log(playerLevel);
        let extendedXP = playerXPperLevel * playerLevel;
        document.getElementById("xpCounter").innerHTML = "PlayerLevel: " + playerLevel + " (XP: " + playerXP + " / " + extendedXP + ")";
        console.log("Spieler " + playerName + " reached " + playerLevel + " with " + playerXP + "(" + playerXPperLevel + "per level)");
        document.getElementById("HP").innerHTML = "HP: " + playerHP + "%";
        return playerLevel;
    }
}


function win() {
    location.reload();
}

function lost() {
    location.reload();
}