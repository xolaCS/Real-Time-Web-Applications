import dinner  from "./myScript.js"; 

// const dinner = require("./myScript.js"); // Importing 


function serveDinner() {
    console.log(`Starters are ${dinner.start}, Mains include ${dinner.main}, dessert is ${dinner.dessert}`)
}

serveDinner(); 

console.log("Hello World");