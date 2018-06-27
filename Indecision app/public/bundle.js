/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_js__ = __webpack_require__(2);

//The file in the import runs first, then the lines in the present file are run

 //here anyName is the default export(we can grab deafualt export by any name)
//only import doesnt work, we need to export as well

// console.log("app.js in the src folder is now running!");
// console.log(square(5)); //Will give an error because square function inside utils.js is not accessible outside the file 
//i.e variables and functions do not have global scope, otherwise it will create huge mess by overriding
// console.log(add(5 + 100));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* default */](45,15));      
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */](14));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canDrink */](30));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */](60));
// isAdult(14);
// canDrink(30);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export add */
/* unused harmony export square */
console.log('we are Inside utils.js');

const square = (x) => x*x;
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

//This is also valid : - (Inline method)
// export const square = (x) => x*x;
// export const add = (a,b) => a+b;

//Two tyoes of exports/imports

//Named export : -


//default export 
/* harmony default export */ __webpack_exports__["a"] = (subtract);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSenior; });
console.log('inside person.js');

const isAdult = (x) => {  
    return x>=18
}

const canDrink = (y) => {
    return y>=21
    // if (y>21){
    //     // console.log('Person is allowed to drink');
    //     return true;
    // }else{
    //     // console.log('Person is not allowed to drink');
    //     return false;
    // }
}


//Default Export
const isSenior = (age) =>{ return age>=60}
// export default isSenior;
// or
// export default (age) =>{ return age>60
// }




/***/ })
/******/ ]);