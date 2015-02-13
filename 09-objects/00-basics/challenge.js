module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var createCourse = {};
  createCourse.title = courseTitle;
  createCourse.duration = courseDuration;
  createCourse.students = courseStudents;
  return createCourse; //return an object that has each property assigned its proper value
};


module.exports.addProperty = function(object, newProp, newValue) {
  if(newProp in object) {  //if object already has newProp return object argument  
    return object;   
  }      
  else {  //if object doesn't have a property newProp
    object[newProp] = newValue;  // add newProp with value of newValue
    return object;
  }
};


module.exports.formLetter = function(argument) {  //1 argument has 3 properties: recipient, sender, msg
  //formLetter.toString();  //combine the three properties into a single string with an additional greeting
  return "Hello " + argument.recipient + ",\n\n" + argument.msg + "\n\n" + "Sincerely," + "\n" + argument.sender;
  }


module.exports.canIGet = function(item, money) {
  var prices = {
  'MacBook Air': 999,  
  'MacBook Pro': 1299,
  'Mac Pro': 2499,
  'Apple Sticker': 1
};

  return (prices[item] != null) && (prices[item] <= money);

  //return true if a user can afford a given item
  //return false if the item is not in the above list of Apple products
  //can't use if conditions

}

  


