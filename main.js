import dinner  from "./myScript.js"; 
import {drinks, menuOptions} from   "./myScript.js"; 

// const dinner = require("./myScript.js"); // Importing 


function serveDinner() {
    console.log(`Starters are ${dinner.start}, Mains include ${dinner.main}, dessert is ${dinner.dessert}`)
}

serveDinner(); 

console.log(drinks[0]);
console.log(menuOptions);