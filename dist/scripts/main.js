"use strict";
var fullName = "Bob";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\n I'll be " + (age + 1) + " years old next month.";
var sentence2 = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
var Color;
(function (Color) {
    Color[Color["Read"] = 2] = "Read";
    Color[Color["Green"] = 8] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var cname = Color[1];
var notSure = 4;
var notSure2 = [2, 'test', false];
/*
notSure.ifItExists();
notSure.toFixed();
notSure2.isItExists();
*/
console.log(notSure2[1]);
//let Sure: Object = 4;
//Sure.toFixed();
var unusable = null;
function voidtest() {
    console.log('this is a void test');
}
voidtest();
var typeassertion = "test type assertion string";
var strlength = typeassertion.length;
var strlength2 = typeassertion.length;
console.log(strlength);
console.log(strlength2);
var test_1 = require("./test");
console.log(test_1.sayHello('Pengyin Shan'));
