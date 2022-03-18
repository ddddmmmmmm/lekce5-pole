// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let pole = [
    "Alena",
    "Jana",
    "Marie",
    "Filomena",
    "Hortenzie"
];

function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}

vypisText(pole)


// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

vypisText(pole[2])

// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

console.log(pole.length)
vypisText(pole.length)


// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.

pole.forEach(function (ele, idx, arr) {
    console.log(idx + '. ' + ele)
    vypisText(idx + '. ' + ele)
})

// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)

pole.push("Jan");
pole.unshift("Anička");
vypisText(pole)


// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()


let smazePrvni = pole.shift()
vypisText(smazePrvni)

let smazePosledni = pole.pop()
vypisText(smazePosledni)
vypisText(pole)




// *********************************************
