// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];
    for (let iRow = 0; iRow < matrix.length; iRow++) {
        let row = matrix[iRow];
        if (iRow % 2 === 1) {
            row.reverse();
        }
        result = result.concat(row);
    }

    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(module.exports(matrix));
