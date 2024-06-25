function searchMatrix1(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    return false;
};

function searchMatrix2(matrix: number[][], target: number): boolean {
    const m = matrix.length, n = matrix[0].length;
    let i = 0, j = 0;
    for (;i < m; i++) {
        if (i < m - 1 && matrix[i][0] <= target && matrix[i + 1][0] > target) break;
    }
    if (i >= m - 1) i = m - 1;
    for (; j < n; j++) {
        if (matrix[i][j] === target) return true;
    }
    return false;
};