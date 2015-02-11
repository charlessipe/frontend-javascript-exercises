module.exports.newArray = function(a, b, c, d) {
  return [a, b, c, d]
};


module.exports.firstAndLast = function(array) {   // pass in 1 argument (at least 3 element array)
  array.splice(1, array.length - 2); //start at index 1 and remove length-2 elements
  return array;
};



//module.exports.firstAndLast = function(array) {   // pass in 1 argument (at least 3 element array)
//  return array.slice(1, array.length - 2); //start at index 1 and remove length-2 elements
//};


//array.length - 1

//module.exports.firstAndLast = function(array) {   // pass in 1 argument (at least 3 element array)
//  array.slice(1, -1); //start at index 1 and remove elements up until the last element
//  return array;
//};
