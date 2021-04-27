//snack 2 argomenti
arrayNumbers = [];

for(i = 1; i<=100; i++){
  arrayNumbers.push(i);
}
console.log(funct(arrayNumbers, 10, 80));



function funct(arr, num1, num2){
  var arrayReturn = [];
  if(num1 < num2 && num2<= arr.length){
    for(i = num1; i < arr.length; i++){
      arrayReturn.push(i);
    }
  }
  
  return arrayReturn
}
