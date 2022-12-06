/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1= 5;
let n2 =6;

if (n1>n2){ console.log(n1)}
else{ console.log(n2)}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=6;
const match=5;

if(x!==match){console.log("not Equal")}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var dividendo =10;
const divisore =5;

if ((dividendo % divisore)==0 ) {console.log("divisibile per 5")}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n =8;
let n_ =0;

if ((n===8)||(n_===8)||((n+n_)===8)||
(((n-n_)||(n_-n))===8)) {console.log(true)}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=60;
const freeShippingMO=50;
let toBuy=freeShippingMO-totalShoppingCart;
if (totalShoppingCart>=freeShippingMO){console.log("free shipping")}
else{console.log(toBuy,"missing for free shipping")}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let discountedprice=totalShoppingCart*0.8;
let toBuy_=freeShippingMO-discountedprice;
let finalprice=discountedprice+10;
if (discountedprice>=freeShippingMO){console.log("free shipping", discountedprice,"total disc. price")}
else{console.log(toBuy_,"missing for free shipping",finalprice,"total inc. shipping")}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let v1=2;
let v2=3;
let v3=1;
 let basso;
 let medio;
 let alto;
 if ((v1<v2)&&(v1<v3)){if(v2<v3){console.log(v1,v2,v3,"v1v2v3") }else {console.log(v1,v3,v2,"v1v3v2")}}
 if ((v2<v1)&&(v2<v3)){if(v1<v3){console.log(v2,v1,v3,"v2v1v3") }else {console.log(v2,v3,v1,"v2v3v1")}}
 if ((v3<v1)&&(v3<v2)){if(v2<v1){console.log(v3,v2,v1,"v3v2v1") }else {console.log(v3,v1,v2,"v3v1v2")}}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value=50;
console.log(typeof(value))

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number=8;

if ((number % 2)==0 ) {console.log("pari")}
else{console.log("dispari")}

/*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7;
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 5;
  if ((val < 10)&&(val>=5)) {
      console.log("Meno di 10");
    } 
    else if (val < 5) {
      console.log("Meno di 5");
    } 
    else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city="Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const popped=me.skills.pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const EmptyArray=[];
 EmptyArray[0]=1
 EmptyArray[1]=2
 EmptyArray[2]=3
 EmptyArray[3]=4
 EmptyArray[4]=5
 EmptyArray[5]=6
 EmptyArray[6]=7
 EmptyArray[7]=8
 EmptyArray[8]=9
 EmptyArray[9]=10
 console.log(EmptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
EmptyArray.pop()
EmptyArray.push(100)
console.log(EmptyArray);

