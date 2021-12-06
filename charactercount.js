//WEEK 2 HW 1; EXERCISE 2
//Output should be: There are _ letters, _ numbers, _ special characters
//Unicode 65-90 for cap letters; 97-122 for lower case; 48-57 for digits

let prompt=require('prompt-sync')()
let msg = prompt('Enter a word or phrase: ').toLowerCase()//Change user entered message into lower case letters because that's what you're checking for in line 15

let lettercount=0
let numcount=0
let specharac=0

for (i=0; i<msg.length; i++) //i<length cuz you're working with indexes; you started at 0
{
    //If the character unicode is between 97-122 (lower case) increment letters
    if  (msg.charCodeAt(i)>=97 && msg.charCodeAt(i)<=122) 
    lettercount++
    //If the character unicode is between 48-57 increment numbers
    else if (msg.charCodeAt(i)>=48 && msg.charCodeAt(i)<=57)
    numcount++
    //Else, increment special characters
    else
    specharac++
}
// console.log('There are ' + lettercount + ' letters.')
// console.log('There are ' + numcount + ' numbers.')
// console.log('There are ' + specharac + ' special characters')

//This is the same as console.logging all of the above but using template literals:
console.log(`There are ${lettercount} letters, ${numcount} numbers, and ${specharac} special characters.`)
