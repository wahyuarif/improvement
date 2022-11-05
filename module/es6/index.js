// import coffeeStock from './state.js';
import { coffeeStock, isCoffeeMachineReady } from "./state.js";
// import { coffeeStock as stock, isCoffeeMachineReady as machine } from "./state.js";
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);