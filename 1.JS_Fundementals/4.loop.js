// 1.reverse a loop
// import PromptSync from 'prompt-sync';
// const prompt = PromptSync();
// let n = Number(prompt("Enter a number : "));
// for(let i=n; i>0; i--){
//     console.log(i);
// }

// 2.print a table
// import PromptSync from 'prompt-sync';
// const prompt = PromptSync();
// let n = Number(prompt("Enter a number : "));
// for(let i=1; i<=10; i++){
//     console.log(n + "X" + i, n*i );
// }

// 3.sum to n terms

// import PromptSync from 'prompt-sync';
// const prompt = PromptSync();
// let n = Number(prompt("Enter a number : "));
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     sum +=i;
// }
// console.log("sum of "+ n +"terms is :",sum);



// 4.factorial of n

// import PromptSync from 'prompt-sync';
// const prompt = PromptSync();
// let n = Number(prompt("Enter a number : "));
// let fact=1;
// we have two type of loops

// first one
// for(let i=1;i<=n;i++){
//     fact *=i;
// }

// second one
// for(let i=n;i>=1;i--){
//     fact *=i;
// }
// console.log("factorial of "+ n +" terms is :",fact);


// 5. print sum of all even and odd from in range seperately
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
let n = Number(prompt("Enter a number : "));
let evenSum=0, oddSum = 0;

for(let i=1; i<=n; i++){
    if(i%2==0){
        evenSum +=i;
    }else{
        oddSum +=i;
    }
}
console.log("sum of even numbers is : ",evenSum);
console.log("sum of odd numbers is : ",oddSum);