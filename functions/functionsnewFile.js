function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
//console.log(makeLine(5));

function makeSquare(size) { //build each row of square w nested loops then put together
    let square = '';

    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '#';
        }
        square += row + '\n';
    }

    return square;
}

//console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);

}

//console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) { //use makeLine(size) 2 gen '#', make func iterate down
    let steps = '';
    for (let i = height; i >= 1; i--) {
        steps += makeLine(i) + '\n';
    }
    return steps;
}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let line = ''
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }

    for (let i = 0; i < numChars;) {
         line += '#';
    }

    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    return line;
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
let triangle = '';
for(let i = 0; i < height; i++) {
triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
}
return triangle.slice(0, -1);
}


function makeDiamond(height) {
    let diamond = '';
    for(let i = 1; i <= height; i += 2) {
        diamond += makeIsoscelesTriangle(i) + '\n';
    }
    for (let i = 0; i < height.length; i++) {
        reversed = str[i] + reversed;
    }
    return diamond 
}