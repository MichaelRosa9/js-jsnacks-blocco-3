//sack 2

//faccio un array di 10 ogetti
var zucchine = [
  {
    peso: 10,
    lunghezza: 15,
  },
  {
    peso: 11,
    lunghezza: 16,
  },
  {
    peso: 12,
    lunghezza: 17,
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
    lunghezza: 15,
  },
  {
    peso: 15,
    lunghezza: 11,
  },
  {
    peso: 16,
    lunghezza: 16,
  },
  {
    peso: 17,
    lunghezza: 5,
  },
  {
    peso: 18,
    lunghezza: 18,
  }
]

//definisco in 2 variabili gli array dove mettero gli oggetti dell array originale
var zucchine_corte = [];
var zucchine_lunghe = [];

$(function(){

  //faccio un ciclo of per ispezionare dentro l'arrai ogni oggetto
  for(zucchina of zucchine){

    //pongo la condizione che se il valore della proprieta(key) chiamata "lunghezza" e' inferiore a 15 pusho l'oggetto zucchina dentro l'array di zucchine corte
    if(zucchina.lunghezza < 15){
      zucchine_corte.push(zucchina);
    }else{
      zucchine_lunghe.push(zucchina);
    }
  }
  console.log(zucchine_corte);
  console.log(zucchine_lunghe);
});