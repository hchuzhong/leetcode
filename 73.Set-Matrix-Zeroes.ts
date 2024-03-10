/**
    Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let iArr: number[] = [];
    let jArr: number[] = [];
    const matrixLength = matrix.length;
    const innerLength = matrix[0].length;
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < innerLength; j++) {
            if (matrix[i][j] === 0) {
                iArr.push(i);
                jArr.push(j);
            }
        }
    }
    iArr = Array.from(new Set(iArr));
    jArr = Array.from(new Set(jArr));
    for (let i = 0; i < iArr.length; i++) {
        matrix[iArr[i]] = new Array(innerLength).fill(0);
    }
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < jArr.length; j++) {
            matrix[i][jArr[j]] = 0;
        }
    }
};