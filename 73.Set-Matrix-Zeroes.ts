/**
    Do not return anything, modify matrix in-place instead.
 */
function setZeroes1(matrix: number[][]): void {
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

function setZeroes2(matrix: number[][]): void {
    const iMap = new Map();
    const jMap = new Map();
    const matrixLength = matrix.length;
    const innerLength = matrix[0].length;
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < innerLength; j++) {
            if (matrix[i][j] === 0) {
                iMap.set(i, true);
                jMap.set(j, true);
            }
        }
    }
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < innerLength; j++) {
            if (iMap.has(i) || jMap.has(j)) matrix[i][j] = 0;
        }
    }
};