// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++){
        matrix.push([])
    }

    let counter = 1;
    const rounds = n;
    let x = 0;
    let y = 0;
    let right = n;
    let down = n - 1;
    let left = n - 1 ;
    let up = n - 2;

    // for rounds
    for (let i = 1; i < rounds; i++) {
        // for right
        for (let r = 0; r < right; r++) {
            matrix[y][x] = counter;
            x ++;
            counter ++;
        }
        right -= 2;
        x--
        y ++;

        // for down
        for (let d = 0; d < down; d++) {
            matrix[y][x] = counter;
            y ++;
            counter ++;
        }
        down -= 2
        y--;
        x--;

        // for left
        for (let l = 0; l < left; l++) {
            matrix[y][x] = counter;
            x--;
            counter ++;
        }
        left -= 2;
        x++;
        y--;

        // for up
        for (let u = 0; u < up; u++){
            matrix[y][x] = counter;
            y --;
            counter ++;
        }
        up -=2
        y++;
        x++;
    }


    return matrix;
}

module.exports = matrix;
