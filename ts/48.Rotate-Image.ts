/**
    Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const temp = JSON.parse(JSON.stringify(matrix));
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[j][n - 1 - i] = temp[i][j];
        }
    }
};