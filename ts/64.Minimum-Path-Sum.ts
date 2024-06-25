function minPathSum(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const curGrid = grid[i][j];
            if (i === 0 && j === 0) continue;
            else if (i === 0) grid[i][j] = grid[i][j - 1] + curGrid;
            else if (j === 0) grid[i][j] = grid[i - 1][j] + curGrid;
            else grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + curGrid;
        }
    }
    return grid[m - 1][n - 1];
};