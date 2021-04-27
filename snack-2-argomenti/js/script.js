//snack 2 argomenti
arrayNumbers = [];

for(i = 1; i<=100; i++){
  arrayNumbers.push(i);
}
console.log(newArray(arrayNumbers, 10, 80));



function newArray(arr, num1, num2){
  var arrayReturn = [];
  if(num1 < num2 && num2<= arr.length){
    for(i = num1; i <= num2; i++){
      arrayReturn.push(arr[i]);
    }
  }
  
  return arrayReturn
}
