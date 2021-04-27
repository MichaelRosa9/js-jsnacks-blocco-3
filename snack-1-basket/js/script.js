//snack basket
//definisco l'array di gicatori
var team= [];

//definisco l'arrai di un sigolo giocatore
var basket_player = {
  playerName:'',
  ponints:'',
  threpointer_stats:''
}

$(function(){
  
  while(team.length < 5){
    var letters = randomLetter(3);
    basket_player.playerName = letters + randomNumberGenerator(100, 999);
    basket_player.ponints = randomNumberGenerator(0,50);
    basket_player.threpointer_stats = percentage(randomNumberGenerator(0,100), randomNumberGenerator(0,100));
    team.push(basket_player);
    
    console.log(basket_player);
  }
  
});

//funzione che mi calcola la percentuale
function percentage(num, perc){
  var percentage = (num * perc) / 100;
  return (num - percentage).toFixed(2);
}


//funzione che genera lettere maiuscole random
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