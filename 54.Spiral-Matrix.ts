function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    const m = matrix.length, n = matrix[0].length;
    if (!m) return result;
    let up = 0, down = m - 1, left = 0, right = n - 1;
    while (true) {
        for (let i = left; i <= right; i++) result.push(matrix[up][i]);
        if (++up > down) break;
        for (let i = up; i <= down; i++) result.push(matrix[i][right]);
        if (--right < left) break;
        for (let i = right; i >= left; i--) result.push(matrix[down][i]);
        if (--down < up) break;
        for (let i = down; i >= up; i--) result.push(matrix[i][left]);
        if (++left > right) break;
    }
    return result;
};