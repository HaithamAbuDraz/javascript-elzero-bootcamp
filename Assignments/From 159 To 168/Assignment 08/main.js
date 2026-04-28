/*
Assignment 08
The line below in your Main.js file is a function that accepts three values ​​and sums them.
Create a file called mod-one.js containing this function that takes three parameters. The function must be unnamed. Make the necessary changes to the file so you can use it in your main.js file.
Create a file called mod-two.js. Copy the three variables below into it and do not modify them. Write your desired code in the mod-two.js file so that the code in your main.js file works correctly.
*/

import calc from "./mod-one.js";
import { modOne } from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
