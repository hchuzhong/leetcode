function searchMatrix1(matrix: number[][], target: number): boolean {
    let result = false;
    const m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === target) return true;
            if (matrix[i][j] > target) break;
        }
    }
    return result;
};

function searchMatrix2(matrix: number[][], target: number): boolean {
    const m = matrix.length, n = matrix[0].length;
    let i = 0, j = n - 1;
    while (i < m && j >= 0) {
        if (matrix[i][j] > target) j--;
        else if (matrix[i][j] < target) i++;
        else return true;
    }
    return false;
};