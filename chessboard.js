/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/
let a = ''
for (b = 0; b < 4; b++) {
    for (let x = 0; x < 8; x++) {
        x % 2 === 0 ? a += '#' : a += ' '
    }
    a += '\n'
    for (let y = 0; y < 8; y++) {
        y % 2 === 0 ? a += ' ' : a += '#'
    }
    a += '\n'
}
console.log(a)

/*
*When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, 
*outputting a grid of the given width and height.
*/
let a = ''
let size = Number(prompt("Choose chessboard size"))
let loop = size /2
for (b = 0; b < loop; b++) {
    for (let x = 0; x < size; x++) {
        x % 2 === 0 ? a += '#' : a += ' '
    }
    a += '\n'
    for (let y = 0; y < size; y++) {
        y % 2 === 0 ? a += ' ' : a += '#'
    }
    a += '\n'
}
console.log(a)
