let fullName: string = `Bob`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

 I'll be ${age+1} years old next month.`
let sentence2: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age+1) + " years old next month."                            

enum Color{Read=2, Green=8, Blue=10};
let c: Color = Color.Green;
let cname: string = Color[1]

let notSure: any = 4;
let notSure2: any = [2, 'test', false]
/*
notSure.ifItExists();
notSure.toFixed();
notSure2.isItExists();
*/
console.log(notSure2[1]);

//let Sure: Object = 4;
//Sure.toFixed();

let unusable: void = null;
function voidtest(): void{
    console.log('this is a void test');
}
voidtest();

let typeassertion: string = "test type assertion string";
let strlength: number = (<string>typeassertion).length;
let strlength2: number = (typeassertion as string).length;
console.log(strlength);
console.log(strlength2);

import { sayHello } from "./test"
function showHello(divName:string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = sayHello(name);
}
showHello('greeting','Pengyin Shan');