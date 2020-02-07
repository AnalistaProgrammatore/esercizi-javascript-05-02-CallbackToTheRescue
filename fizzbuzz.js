/**
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
* (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i=0; i<100; i++){
  let a= ''
  i % 15 === 0 ? a+='FizzBuzz'
: i % 5 === 0 ? a+='Buzz' 
: i % 3 === 0 ? a+='Fizz' : a+=i
  console.log(a)
}

//purtroppo non sono riuscito a trovare un modo per evitare di fare uscire FizzBuzz al primo giro del ciclo.
