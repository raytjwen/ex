require('/Users/apple/ex/__log.js');
var _ = require('/Users/apple/ex/node_modules/underscore/underscore.js');

//_.each({age: 24, gender: 'male'}, function (value, key) { console.log(key+': '+value); });

//console.log(isFinite(3));
//console.log(isFinite(10/0));


//var countDownFrom = function (num) {
//    console.log(num);
//    num--;
//    if (num < 0) { return false}
//    countDownFrom(num);
//};
//
//countDownFrom(5);

//var foo = function () {
//    var bar = function () {
//        console.log(this);    
//    }();
//    console.log(this);
//}();

//(function (msg) { console.log(msg); }('Hi'));

//var n = new Object(1);
//console.log(n === 1);
//console.log(typeof 1);

//var myFunction = function (z, s, d) {
//    //return arguments.length;    
//    //return myFunction.length;
//    return arguments.callee.length;
//}
//console.log(myFunction());

//Object.prototype.foo = 'bar';
//var cody = new Object();
//console.log(cody);
//console.log(cody.foo);


//var d = new Date();
//console.log(d.toLocaleString());

//console.log(typeof new Object(true));

//var cody; 
//cody = {
//    age: 24,
//    gender: 'male'        
//};
//
//for (var key in cody) {
//    console.log(cody.propertyIsEnumerable('age'));    
//}

var Person = function Person (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};

console.log(Person.prototype);
var cody = new Person(true, 33, 'male');
console.log(cody);
//cody.sayHi();
//var lisa = new Person(true, 34, 'female');
//console.log(lisa);
//console.log(cody.constructor);
//console.log(cody.constructor.toString());
//console.log(__line);
//var a = ['xx', 'oo'];
//console.log(a.constructor.prototype);

//console.log(Array.prototype.join);

//var aaa = {p1: 'foo'};
//var bbb = Object.create(aaa);
////bbb.p2 = 'booo';
//console.log(aaa);
//console.log(bbb.constructor.prototype);
//bbb.p1 = 'abc';
//for (var x in bbb) {
//    console.log(bbb[x]);
//}
//delete bbb.p1;
//for (var x in bbb) {
//    //if (bbb.hasOwnProperty(x))console.log(x);   
//    console.log(bbb[x]);
//}
//console.log(new bbb());



//console.log(1 instanceof Number);
//console.log(new Number(1) instanceof Number);
//console.log(typeof new Number(1));
//console.log(typeof 1);
//console.log(typeof undefined);
//console.log(typeof null);

//var o1 = new Object({
//    b: new Boolean(true)
//    //b: Boolean(true)
//});
//var o2 = new Object({
//    b: true 
//});
//console.log(o1);
//console.log(o2);
//console.log(typeof o1.b);
//console.log(typeof o2.b);
//if (o1.b) { console.log('o'); }
//if (o2.b) { console.log('o'); }

//var s1 = new String('foo');
//console.log(typeof s1);
//console.log(s1.constructor);
//var s2 = 'foo';
//console.log(typeof s2);
//console.log(s2.constructor);
//var a1 = new Array('foo', 'boo');
//console.log(typeof a1);
//console.log(a1.constructor);
//console.log(a1);
//var a2 = ['foo', 'boo'];
//console.log(typeof a2);
//console.log(a2.constructor);
//console.log(a2);
//
//var f1 = new Function("x", "y", "return x*y");
//console.log(typeof f1);
//console.log(f1.constructor);
//console.log(f1);
//var f2 = function (x, y) { return x*y };
//console.log(typeof f2);
//console.log(f2.constructor);
//console.log(f2);

//var myArr = new Array();
//console.log(typeof myArr);
//console.log(myArr);
//console.log(myArr.constructor.toString());

