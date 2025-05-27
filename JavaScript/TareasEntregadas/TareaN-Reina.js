const N = 8;
let solutions = [];

function isSafe(positions, row, col) {
    for (let i = 0; i < row; i++) {
        let otherCol = positions[i];
        if (
            otherCol === col ||                         // misma columna
            otherCol - i === col - row ||               // misma diagonal \
            otherCol + i === col + row                  // misma diagonal /
        ) {
            return false;
        }
    }
    return true;
}

function solve(row, positions) {
    if (row === N) {
        solutions.push([...positions]);
        printBoard(positions);
        return;
    }

    for (let col = 0; col < N; col++) {
        if (isSafe(positions, row, col)) {
            positions.push(col);
            solve(row + 1, positions);
            positions.pop();
        }
    }
}

function printBoard(positions) {
    for (let row = 0; row < N; row++) {
        let line = '';
        for (let col = 0; col < N; col++) {
            line += positions[row] === col ? 'Q ' : '. ';
        }
        console.log(line);
    }
    console.log("-----------");
}

solve(0, []);
