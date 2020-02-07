/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

let a =' '
for(let i=0; i<8; i++){
  for( let y =0; y<8; y++){
     (i+y) % 2 === 0 ? a+='#' : a+=' ' 
  }
  a += "\n"
}
console.log(a)
