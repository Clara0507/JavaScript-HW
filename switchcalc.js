//WEEK 2 HW 1; EXCERCISE 4 SWITCH CALCULATOR (In this exercise I'm only going to use two user entered values. Later on try re-working this so they can input as many values as they want)

console.log('MENU: 1-Add  2-Subtract  3-Multiply  4-Divide  5-Exit')

let prompt=require('prompt-sync')()
let menu = Number(prompt('Choose a menu option: ')) // Turn into a number 

let num1;
let num2;
let result;

switch(menu) //Here put the variable that shows what the different cases are; you are dealing with 5 menu options
{
    case 1: //Here I want to put each menu option in an individual case and then do the appropiate calculation
        {
            num1 = Number(prompt('Enter first value here: ')) // Must turn what the user inputs in num1 and num2 into actual numbers to be able to perform the math calculations
            num2 = Number(prompt('Enter second value here: '))
            
            result=num1 + num2 //Here you put the calculation that option 1 refers to and it is stored in your result variable 
            console.log(`${num1} + ${num2} = ${result}`)
            break; //Remember you need a break after each case or else it will move on to the next case scenario
        }
    case 2: //Here I want to subtract
        {
            num1 = Number(prompt('Enter first value here: '))
            num2 = Number(prompt('Enter second value here: '))
            
            result=num1-num2
            console.log(`${num1} - ${num2} = ${result}`)
            break;
        }
    case 3: //Here I want to multiply
        {
            num1 = Number(prompt('Enter first value here: '))
            num2 = Number(prompt('Enter second value here: '))
            
            result=num1*num2
            console.log(`${num1} * ${num2} = ${result}`)
            break;
        }
    case 4: //Here I want to divide and not only show the quotient but also the remainder
        {
            num1 = Number(prompt('Enter first value here: '))
            num2 = Number(prompt('Enter second value here: '))
            
            result=num1/num2
            result2=num1%num2
            //console.log(num1 + 'divided by' + num2 + 'equals' + result + ' with a remainder of ' + result2)
            //Turning the above console.log into a template literal:
            console.log(`${num1} / ${num2} = ${result} with a remainder of ${result2}`)
            break;
        }
    case 5: //Here if the user enters number 5 for their menu option they exit the program
        {
            //I omitted the variables num1 and num2 here so that when the user enters menu option 5 the next message they'll see is 'Exit' instead of having to input two numbers and then getting the 'Exit' message
            console.log('Exit')
            break;
        }
    default: //If user enters any value other than 1-5, this is what I want displayed:
        {
            console.log('Invalid Option') 
        }
}
