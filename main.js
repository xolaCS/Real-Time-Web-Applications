const dinner = require("./myScript.js"); // Importing 

// import dinner from "./myScript.js"

function serveDinner() {
    console.log(`Starters are ${dinner.start}, Mains include ${dinner.main}, dessert is ${dinner.dessert}`)
}

serveDinner(); 

console.log("Hello World")