#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random()* 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1-20",
    }
]);
if(answer.userguessnumber === randomnumber){
    console.log("congrats! you guessed right number");
}
else {
    console.log("sorry! you guessed wrong number");
}
