// JS-Core: "this" in functions
var student = {
    name: 'Mai ha Thi',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};
var_deStudent = student.getName();

// JS-Core: scopes, call & apply
var person1 = {name: 'Nhat Minh', age: 12};
var person2 = {name: 'Huu Trung', age: 32};

var sayHello = function(){alert('Hello,' + this.name);};
var sayGoodbye = function(){alert('Goodbye,' + this.name);};

// Scope chain
function step1 () {
    console.log(te);
}
function step2 () {
    var te = 2;
    step1();
}
step2();
var te = "Global variables";

// JS-Core: scopes, bind
var checkNumericRange = function (value) {
    if(typeof value !=='number')
    return false;
    else
    return value >= this.minumum && value <= this.maximum;
}
var range = {minimum:10, maximum:20};
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange(12);
console.log(result);

// JS-Core: Nested functions, scope 
var myFunction = function() {
    var name = 'Ha Thi';
    var myOtherFunction = function () {
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();

// JS-Core: Closures
function outerF(){
    var x = "World";
    function innerFsetX(val){
        x=val;
    }
    return innerFsetX;
}
var a = outerF();
a("Hello");

// Curry
function add(a, b, c) {
    return a+b+c;
}

console.log(add(1,2,3));
function addCurries(a){
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);
console.log(ad3);

// Closures scope
var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () =>{
        console.log(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();

// JS-Core: Functional inheritance
class square {
    constructor(width){
        this.width = width;
    }

    getArea() {
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}
class cube extends square {
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.square * this.width}`);
        return this.squareArea * this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume();