//WEEK 2 HW 1; EXERCISE 1 PALINDROMES

let prompt = require ('prompt-sync')()
let str = prompt('Enter a word or phrase: ').toLowerCase() //Turn into lower case up here not further down your code 

let reverse=str.length-1 //When you .charAt this it gives you the reverse but you have to store it in another variable
let msg=''.toLowerCase()//This variable stores the reversed message from line 5; and you want to turn this and the str variable into lower case so it works without worrying about mixed cases

while (reverse>=0)
{
    msg+=str.charAt(reverse)
    reverse--
}
if (msg==str)
{
    console.log(str + ' is a palindrome.')
}
else
{
    console.log(str + ' is not a palindrome')
}
    


