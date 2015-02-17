module.exports.sumNumbers = function(array) {
  var total = 0;
  for(var index = 0; index < array.length; index++) {
    total += array[index];  //return the sum of all numbers inside of the array that is passed to the function
                            //if the array is empty, this function should return 0
  }
  return total;
};




module.exports.splitAndLowerCaseString = function(inputString) {
 var myString = inputString.toLowerCase().split(","); //split the inputString argument into an array of strings by commas
 return myString; //return an array with the set of split strings in lowercase format
}; 





module.exports.addIndex = function(inputArray){  //create and return a new array of all inputs as strings
  var myNewArray = [];
  for(var index = 0; index < inputArray.length; index ++){
    myNewArray.push(index + " is " + inputArray[index]);      //each of the new strings should start with "[index] is [data element at index]"
  }
  return myNewArray;
};





