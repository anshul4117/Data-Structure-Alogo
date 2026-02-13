import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let year = Number(prompt("Enter a year = "));
let isleap = false;

// medium
// if(year%4==0)
//     if(year%100==0)
//         if(year%400==0) isleap=true
//         else isleap=false
//     else
//         isleap=true;
// else
//     isleap = false;
    
// console.log(isleap? "leap Year" : "Not leap year");

// better approch
if(year%4 == 0 && year%100 != 0)
    isleap = true;
else if(year%400 == 0)
    isleap = true
else
    isleap = false;
    
console.log(isleap? "leap Year" : "Not leap Year");