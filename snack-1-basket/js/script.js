//snack basket

//funzione che genera lettere maiuscole random
const randomLetter = (length) => {
  var result= [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(var i = 0; i<length; i++){
    result.push(characters.charAt(randomNumberGenerator(0, characters.length - 1)));//faccio il length meno uno perceh "A" ha posizione 0 e non 1
  }
  return result.join('');
}

//funzione che genera un numero random
const  randomNumberGenerator = (min, max) => {
 return Math.floor(Math.random()* (max - min + 1) + min);  
}


//definisco l'array di gicatori
var team= [];


$(function(){
  //faqccio un ciclo
  while(team.length < 5){
    
    //definisco l'oggett di un sigolo giocatore dentro al ciclo
    const basket_player = {
      playerName:'',
      ponints:'',
      threpointer_stats:''
    }
    //definisco la funzione in una variabile le lettere da dare al giocatore
    let letters = randomLetter(3);

    //definisco il valore della proprieta dell'oggetto
    basket_player.playerName = letters + randomNumberGenerator(100, 999);
    //definisco il valore della proprieta dell'oggetto
    basket_player.ponints = randomNumberGenerator(0,50);
    //definisco il valore della proprieta dell'oggetto
    basket_player.threpointer_stats = randomNumberGenerator(0,100) + '%';
    //pusho l'oggetto con i valorei assergnati alle proprieta
    team.push(basket_player);

  }
});

