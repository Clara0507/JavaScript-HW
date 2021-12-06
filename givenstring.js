//WEEK 2 HW 1; EXCERCISE 3
//How many times a user entered word occurs in a given string

let givenstr='Coding is difficult but it is also very fascinating!'.toLowerCase()//You want to put this and the user entered word into lower case letters so that you can find all instances of the word regardless of case

let prompt=require('prompt-sync')()
let userword=prompt('Enter a word: ').toLowerCase()

let newarray=givenstr.split(' ') //Here the split method turns the string into an array; Using ' ' with a space in between splits the array by words not letters, making it much easer to look through an arrray for words(elements).
let wordcount=0 //This is the variable that's going to tell us(store) how many times the user entered word appears in our given string; has to start at 0 and then it increments after your if condition

for (i=0; i<givenstr.length; i++) //You need a loop to look through the array for the user entered word
{
    if (userword==newarray[i]) //Here you are comparing, checking to see if the user entered word appears in the array and if it does it keeps looping to see if it appears again 
    wordcount++ //This increments the wordcount by 1 so if there is more than one instance of the user entered word in the given string it will find it
    
}
console.log(`The user word '${userword}' appears ${wordcount} times in our given string.`) //Console.log outside the for loop so that the message is not displayed over and over again