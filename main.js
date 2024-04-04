#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 2345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin  code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select a option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    if (myBalance -= amountAns.amount) {
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (amountAns.amount > myBalance) {
        console.log("Insufficient balance");
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
if (operationAns.operation === "fast cash") {
    let cash = await inquirer.prompt([
        {
            name: "options",
            message: "select any amount",
            type: "list",
            choices: ["1000", "2000", "5000", "10000", "20000"]
        }
    ]);
    if (myBalance -= cash.options) {
        console.log(`your remaining amount is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
