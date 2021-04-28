//snack 3 array

//Metto le funzioni prima perche se no mi da errore...
const randomCharacter = (length) => {
  const result= [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  for(let i = 0; i<length; i++){
    result.push(characters.charAt(randomNumberGenerator(0, characters.length - 1)));//faccio il length meno uno perceh "A" ha posizione 0 e non 1
  }
  return result.join('');
}

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random()* (max - min + 1) + min);  
 }
 

//creao 2 array di dimensuioni differenti
const arrayNum = [1, 2, 3, 4, 5, 6];
const arrayAlph = ["A", "B", "C", "D"];

if(arrayNum === arrayAlph){
  console.log('Arrays are equal');
}else{//se il length dell'array e' minore dell'altro
  console.log('Arrays are not equal. Loading random characters in array...');
  //faccio un ciclo while per riempire l'array fino ad arrivare alla stessa dimensione dell'altro
  while(arrayAlph.length <= arrayNum.length){
    arrayAlph.push(randomCharacter(1));
  }
  //metto un set time out per poi visualizzare i 2 array che ora sono di dimensioni uguali
  setTimeout(function(){
    console.log('Now the arrays are equal');
    console.log(arrayAlph, arrayNum);
  },1000)
}




