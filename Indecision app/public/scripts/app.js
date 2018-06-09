'use strict';

// //Functions ES syntax 
// function square(x){
//  return x*x; //returns the square of the number
// };
// //OR
// let square2 = function(x){
//     return x*x;
// };
// console.log(square(8));
// console.log(square2(5));


// //ES6 syntax : arrow functions
// let squareArrow = (x) => {
//     return x*x;
// }
// let squareArrow2 = (x) =>  x*x  //Implicit return for a single statement
// console.log(squareArrow(81));
// console.log(squareArrow2(15));

// let fullname = 'Shubham Chauhan'
// let getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// };
// let getFirstName2 = (fullname) => fullname.split(' ')[0];
// console.log(getFirstName(fullname));
// console.log(getFirstName2(fullname));


//Es 5 arguments object is no longer used in ES6 
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(3, 4, 5));

//ES6 syntax , arguments no longer available
var add2 = function add2(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add2(3, 4, 5));

//ES5 this was not bound
var user = {
    name: 'shubham',
    cities: ['delhi', 'mumbai', 'toronto'],
    citiesVisited: function citiesVisited() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' visited ' + city);
            //'this' here (in arrow function will use the this  of the parent i.e this of this.cities, so no need to bound 'this' as in the case of ES5 )
        });
    }
};
user.citiesVisited();