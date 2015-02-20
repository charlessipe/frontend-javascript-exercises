module.exports.stream = function(conditionalFn, actionFn){
  while (conditionalFn() === true){
    actionFn();
  }
};



module.exports.sumNumbers = function(arrayOfNumbers){  //take an array of numbers as an argument.
  var total = 0; 
  var index = 0;
  while(index < arrayOfNumbers.length){
    total += arrayOfNumbers[index];  
    index ++;
  }
  return total;  //return the sum of the numbers.
};
