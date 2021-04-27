//snack basket
//definisco l'array di gicatori
var team;

//definisco l'arrai di un sigolo giocatore
var basket_player = {
  playerName:'',
  ponints:'',
  threpointer_stats:''
}

$(function(){

  var letters = randomLetter(3);
  var name = letters + randomNumberGenerator(100, 999);


});


function randomLetter(length){
  var result= [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(var i = 0; i<length; i++){
    result.push(characters.charAt(randomNumberGenerator(0, characters.length)));
  }
  return result.join('');
}




//funzione che genera un numero random
function randomNumberGenerator(min, max){
 return Math.floor(Math.random()* (max - min + 1) + min);  
}