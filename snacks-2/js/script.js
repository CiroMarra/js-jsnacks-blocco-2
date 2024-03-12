//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.
// chiede a l'utente la prima parola
const userText1 = prompt('scrivi una parola');
// chiede a l'utente la seconda parola
const userText2 = prompt ('scrivi una seconda parola');


// determina quale parola è più lunga e qual'è più corta
let longWord,shortWord;
if (userText1.length > userText2.length){
        longWord = userText1;
        shortWord = userText2;
}  else {
        longWord = userText2;
        shortWord = userText1;

}
// una volta determinata qual'è la paroal più lunga e quella più corta stampa in console quella più corta.
console.log('Parola corta: ' + shortWord);
console.log('Parola lunga: ' + longWord);

        
