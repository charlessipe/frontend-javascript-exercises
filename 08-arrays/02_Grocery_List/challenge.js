

/*module.exports.addItem = function(itemYouWantToAdd, array){
  var checkList = array.indexOf(itemYouWantToAdd);  //check index of itemYouWantToAdd and set it to a variable
  if(checkList === -1){   //if variable equals -1 then add element to end of array
  array.push(itemYouWantToAdd);
  }
};
*/


module.exports.addItem = function(itemYouWantToAdd, array){
   //check index of itemYouWantToAdd and set it to a variable
  if(array.indexOf(itemYouWantToAdd) == -1){   //if variable equals -1 then add element to end of array
  array.push(itemYouWantToAdd);
  }
  return array;
};


//module.exports.reverseSortedList = function(array){
//  return array.reverse();
//};



module.exports.reverseSortedList = function(array){
  return array.sort().reverse();
};



//var myArray = ['one', 'two', 'three'];
//myArray.reverse(); 

//console.log(myArray) // ['three', 'two', 'one']

