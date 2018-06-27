import './utils.js';
//The file in the import runs first, then the lines in the present file are run
import minus,{square, add} from './utils.js'
import  anyName,{ isAdult, canDrink } from './person.js' //here anyName is the default export(we can grab deafualt export by any name)
//only import doesnt work, we need to export as well

// console.log("app.js in the src folder is now running!");
// console.log(square(5)); //Will give an error because square function inside utils.js is not accessible outside the file 
//i.e variables and functions do not have global scope, otherwise it will create huge mess by overriding
// console.log(add(5 + 100));
console.log(minus(45,15));      
console.log(isAdult(14));
console.log(canDrink(30));
console.log(anyName(60));
// isAdult(14);
// canDrink(30);

