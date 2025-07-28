//ES6 Module import example ... use mathOperationsM.js

//Name import for when we are not using default while exporting our module
import {add, subtract} from "./mathOperationsM.js";

//When we are using the export "default" then we can not import that in {}.
import multiply from "./mathOperationsM.js";
//if we use default we have to import them one by one.
console.log(multiply(5,6));
 