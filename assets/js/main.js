/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


/**
 * Genera un numero intero casuale tra min&max
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * * Genera una lista di 5 numeri casuali per il pc
 */
var numeriPC = [];
while (numeriPC.length < 5) {
    var numero =  getRndInteger(1, 100);
    if(!numeriPC.includes(numero)){
        numeriPC.push(numero);
    }

}
console.log(numeriPC);

/** 
 * * Fa partire il timer
 * Chiede all utente di inserire uno per volta i 5 numeri
 * Mostra i numeri che l' utente ha indovinato
 */
var displayNumeriPC = alert(numeriPC);
var divEl = document.getElementById("risultato");
var timer = setTimeout(function () {
    var numeriIndovinati = [];
    var i = 0
    while (i < 5) {
        var scelteUente = Number(prompt("inserisci un numero tra quelli presenti prima"));
        if(numeriPC.includes(scelteUente)){
            numeriIndovinati.push(scelteUente)
        }

        i++;
    }
    console.log(numeriIndovinati); 

    for (var index = 0; index < numeriIndovinati.length; index++) {
        var element = numeriIndovinati[index];
        
        divEl.insertAdjacentHTML("beforeend", 
        `
        <p>${element}</p>

        `)

    }
    
}, 30000)


    





