#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a random number between 1 till 10 .",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("CONGRATULATIONS ! you guessed a right number");
}
else {
    console.log("OOPSS ! you guessed a wrong number ");
}
