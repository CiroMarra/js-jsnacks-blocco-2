// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
//se è dispari stampa il numero successivo
// Chiede a l'utente di inserire un numero, il parseInt fa in modo che ciò che scrive l'utente sia realmente convertito in un numero.
let userNumber = parseInt(prompt('dammi un numero'));
   
    // controlla che il numero dell'utente sia pari o dispari.
    if(userNumber % 2 ===0) {
        // se il numero è pari manda il messaggio 'il tuo "numero"(mostra il numero inserito dall'utente) è pari'
        alert('il tuo numero ' + userNumber + ' è pari') ;
        
    } else {
        // se il numero è dispari manda il messaggio ' il tuo "numero"(mostra il numero inserito dall'utente) è dispari sarà trasformato in (mostra il numero successivo  che è pari all'utente) che è pari'
        alert('il tuo numero ' + userNumber + '  è dispari sarà trasformato in  '+ (userNumber +1) + ' che è pari');    
    }

    // controlla quello che succede all'interno della variabile userNumber.
    console.log(userNumber);