function searchMatrix(matrix: number[][], target: number): boolean {
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