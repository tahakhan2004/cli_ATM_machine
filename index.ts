#! /usr/bin/env node
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

let balance  = 10000
const pinNumber = 33441

const pincode = await inquirer.prompt([
    {
        name: "pinNum",
        message: "Enter your Pin Number: ",
        type: "number"
    },
])
 if(pincode.pinNum === pinNumber){
    console.log("correct pin");
    const whattodo = await inquirer.prompt([
        {
            name: "action",
            message: "Please Select option: ",
            type: "list",
            choices:["Withdraw", "check balance"]
        },
    ])

    if(whattodo.action === "Withdraw"){
        const amount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount to withdraw: ",
                type: "number"
            },
        ])

        if(amount.amount <= balance){
            balance = balance - amount.amount;
            console.log("Your current balance is ", balance);
        }else{
            console.log("insufficient funds");
            
        }
    }

    if(whattodo.action === "check balance"){
        console.log("Your current balance is ", balance);
    }

 }else{
    console.log("Invalid Pin number");
    
 }