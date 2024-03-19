function orangesRotting(grid: number[][]): number {
    let result = -1;
    if (!grid.length || !grid[0].length) return result;
    const m = grid.length, n = grid[0].length;
    let freshCount = 0;
    const rottenQueue: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) freshCount++;
            else if (grid[i][j] === 2) rottenQueue.push([i, j]);
        }
    }

    let round = 0;
    while (freshCount > 0 && rottenQueue.length) {
        round++;
        const length = rottenQueue.length;
        for (let i = 0; i < length; i++) {
            const [row, column] = rottenQueue.shift();
            if (row - 1 >= 0 && grid[row - 1][column] === 1) {
                grid[row - 1][column] = 2;
                freshCount--;
                rottenQueue.push([row - 1, column]);
            }
            if (row + 1 < m && grid[row + 1][column] === 1) {
                grid[row + 1][column] = 2;
                freshCount--;
                rottenQueue.push([row + 1, column]);
            }
            
            if (column - 1 >= 0 && grid[row][column - 1] === 1) {
                grid[row][column - 1] = 2;
                freshCount--;
                rottenQueue.push([row, column - 1]);
            }
            if (column + 1 < n && grid[row][column + 1] === 1) {
                grid[row][column + 1] = 2;
                freshCount--;
                rottenQueue.push([row, column + 1]);
            }
        }
    }
    return freshCount > 0 ? -1 : round;
};