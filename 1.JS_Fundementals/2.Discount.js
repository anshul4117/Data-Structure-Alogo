import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let amount = Number(prompt("Enter a amount = "));

// basic
// if(amount>=0 && amount<=5000)
//     console.log(amount);
// else if(amount>=5001 && amount<=7000)
//     console.log(amount - (5*amount)/100);
// else if(amount>=7001 && amount<=9000)
//     console.log(amount - (10*amount)/100);
// else if(amount>=9001 )
//     console.log(amount - (20*amount)/100);

// better approch
let dis = 0;
if (amount >= 0 && amount <= 5000) dis = 0
else if (amount > 5000 && amount <= 7000) dis = 5
else if (amount > 7000 && amount <= 9000) dis = 10
else if (amount > 9000) dis = 20
console.log("This discount amount is : ", (amount - (dis * amount) / 100));