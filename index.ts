// import inquirer from "inquirer"
// import chalk from "chalk";



// let Convertion = {
//     "PKR": {
//       "USD": 0.0036101083032491,
//       "GBP": 0.0037,
//       "PKR": 1
//     },
//     "GBP": {
//       "USD": 1.21,
//       "PKR": 271.79,
//       "GBP": 1
//     },
//     "USD": {
//       "PKR": 277,
//       "GBP": 0.83,
//       "USD": 1
//     }
//   }
//   const answer: {
//     from: "PKR"| "USD" | "GBP",
//     to: "PKR"| "USD" | "GBP",
//     amount: number
//   } = await inquirer.prompt([
//     {
//         type: "list",
//         name: "from",
//         choices: ["PKR", "USD", "GBP"],
//         message: "Select your currency: "
//     },
//     {
//         type: "list",
//         name: "to",
//         choices: ["PKR", "USD", "GBP"],
//         message: "Select your convertion currency: "
//     },
//     {
//         type: "number",
//         name: "amount",
//         message: "Enter your convertion amount: "
//     }
//   ]);

//   const {from, to, amount} = answer;

//   if(from && to && amount) {
//     let result = Convertion[from][to] * amount;
//     console.log(`Your convertion from ${chalk.greenBright.bold(from)} to ${chalk.greenBright.bold(to)}
    
//     is ${chalk.greenBright.bold(result)}`)
//   } else {
//     console.log(chalk.green("Invalid inputs")
    
  //   )
  // }