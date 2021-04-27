//snack-1

var zucchine = [
  {
    peso: 10,
    lunghezza: 5,
  },
  {
    peso: 11,
    lunghezza: 6,
  },
  {
    peso: 12,
    lunghezza: 7,
  },
  {
    peso: 13,
    lunghezza: 8,
  },
  {
    peso: 9,
    lunghezza: 9,
  },
  {
    peso: 8,
    lunghezza: 10,
  },
  {
    peso: 15,
    lunghezza: 11,
  },
  {
    peso: 16,
    lunghezza: 6,
  },
  {
    peso: 17,
    lunghezza: 5,
  },
  {
    peso: 18,
    lunghezza: 8,
  }
]

$(function(){
  var sum = 0;
  //ciclo for OF per calolare la somma per il peso delle zucchine
  for(zucchina of zucchine){
   //definisco l'oggetto sigolo in una variabile dentro l'array 
   var peso = parseInt(zucchina['peso']);
    //aggiungo all somma ogni peso delle zucchine
   sum += peso;
  }

});