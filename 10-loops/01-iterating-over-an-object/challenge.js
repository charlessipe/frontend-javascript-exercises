module.exports.getKeys = function(anObject) {  //accept one argument, an object
  var keys = []
  for(var key in anObject) {  
    keys.push(key);
  }
  return keys;  //return an array of each of the keys in the object   
};




module.exports.getValues = function(myObject){  //accept one argument, an object
  var values = []
  for(var key in myObject) {
    values.push(myObject[key]);  
  }
  return values; // return an array of each of the values in the object
};  


module.exports.objectToArray = function(coolObject){
  //convert the object passed in to an array of strings
  var keyValues = [];
  for(var key in coolObject) {
    keyValues.push(key + " is " + coolObject[key]);
  }
  return keyValues;  //each string should be in the format of "[key] is [value]" for each key/value pair in the object
  //if an empty object is passed in, an empty array should be returned
  
};


