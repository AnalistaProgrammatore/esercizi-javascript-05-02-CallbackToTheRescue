/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

let a = ' '
for(let i = 0; i < 8; i++){
  for( let x = 0; x < 8; x++){
     x % 2 === 0 ? a+='#' : a+=' ' 
  }
  a += '\n'
}
console.log(a)

//non sono riuscito a fare in modo che la riga successiva restituisca i caratteri invertiti rispetto a quella precedente
