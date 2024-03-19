function numIslands(grid: string[][]): number {
    let result = 0;
    if (!grid.length || !grid[0].length) return result;
    const m = grid.length, n = grid[0].length;
    const inArea = (row: number, column: number): boolean => {
        return row >= 0 && row < m && column >= 0 && column < n;
    }
    const dfs = (row: number, column: number): void => {
        if (!inArea(row, column)) return;
        if (grid[row][column] !== '1') return;
        grid[row][column] = '2';
        dfs(row - 1, column);
        dfs(row + 1, column);
        dfs(row, column - 1);
        dfs(row, column + 1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                result++;
                dfs(i, j);
            }
        }
    }
    return result;
};