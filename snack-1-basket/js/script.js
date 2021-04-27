//snack basket
//definisco l'array di gicatori
var team= [];


$(function(){
  //faqccio un ciclo
  while(team.length < 5){
    
    //definisco l'oggett di un sigolo giocatore dentro al ciclo
    var basket_player = {
      playerName:'',
      ponints:'',
      threpointer_stats:''
    }
    //definisco la funzione in una variabile le lettere da dare al giocatore
    var letters = randomLetter(3);

    //definisco il valore della proprieta dell'oggetto
    basket_player.playerName = letters + randomNumberGenerator(100, 999);
    //definisco il valore della proprieta dell'oggetto
    basket_player.ponints = randomNumberGenerator(0,50);
    //definisco il valore della proprieta dell'oggetto
    basket_player.threpointer_stats = percentage(randomNumberGenerator(0,100), randomNumberGenerator(0,100));
    //pusho l'oggetto con i valorei assergnati alle proprieta
    team.push(basket_player);
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