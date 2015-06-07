require('/Users/apple/ex/__log.js');

var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};
var cody = new Person(true, 33, 'male');
console.log(cody);
console.log(cody.constructor);
console.log(cody.constructor.toString());
console.log(__line);

//var myObj = new Object();
//myObj['0'] = 'f';
//myObj['1'] = 'o';
//myObj['2'] = 'o';
//console.log(myObj);
//console.log(typeof myObj);
//console.log(myObj.length)
//var myStr = new String('foo');
//console.log(myStr);
//console.log(typeof myStr);
//console.log(myStr.length);
//var sss = 'foo';
//console.log(sss);
//console.log(typeof sss);
//console.log(sss.length);
