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
    getRndInteger(1, 100);
    if(!numeriPC.includes(getRndInteger(1, 100))){
        numeriPC.push(getRndInteger(1, 100));
    }

}
console.log(numeriPC);

/** 
 * * Fa partire il timer
 * Chiede all utente di inserire uno per volta 5 numeri
 */
var displayNumeriPC = alert(numeriPC);
var jikan = setTimeout(function () {
   
    do {
        var scelteUente = Number(prompt("inserisci un numero tra quelli presenti prima"));
        numeriUtente.push(scelteUente)
    } while (numeriUtente.length < 5);
  
}, 5000)

var numeriUtente = [];
console.log(numeriUtente);






/* var tempo = 30;

var timer = setInterval(function() {
   
    if(timer === 0){
        clearInterval(timer);
        alert("tempo scaduto")  
    }else{
        tempo--;
    }
       
}, 3000) */
