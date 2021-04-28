//snack 2 argomenti

const newArray = (arr, min, max) => {
  const arrayReturn = [];
  if(min < max && max<= arr.length){
    for(i = min; i < max; i++){
      arrayReturn.push(arr[i]);
    }
  }else{
    arrayReturn = 'Non hai immesso i paratre in modo corretto nella funzione.'
  }
  return arrayReturn
}


const arrayNumbers = [];
for(i = 1; i<=100; i++){
  arrayNumbers.push(i);
}

const arrayAlphabetCapps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


console.log(newArray(arrayNumbers, 10, 20));
console.log(newArray(arrayAlphabetCapps, 10, 20));


