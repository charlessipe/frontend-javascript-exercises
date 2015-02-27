module.exports.copy = function(myObject) {
  var secondObject = {};
  for (var x in myObject){  //loop through myObject
    secondObject[x] = myObject[x];  //assign newObject propertys with myObject properties
  }
  return secondObject;
};

module.exports.extend = function(dest, src) {  // take two dictionaries as arguments (dest and src)
  
  for(var properties in src){  //copy all of the properties (e.g. key, value pairs) of src into dest
    dest[properties] = src[properties];
  }
  return dest;  // return a modified dest
};


module.exports.hasElems = function(anObject, anArray) {  //take two arguments. The first is an object and the second is an array of elements

  if(anArray.length == 0) {
      return true;
    }

  var rtnValue = true;

  for(var index = 0; index < anArray.length; index++) { //loop through anArray
  
    if(anObject[anArray[index]] == null) {  //is each array element a key in the object?
      rtnValue = false;
      break;
    }
  }
  return rtnValue;
};

/*
    ✓ should be defined 
    1) returns true for an empty array
    ✓ returns true if it has all the keys 
    2) returns false if one or more of the keys isn't in the hash

Complete the hasElems function. This function should:

take two arguments. The first is an object and the second is an array of elements
return true when all of the elements in the array are keys in the object, false otherwise
*/




