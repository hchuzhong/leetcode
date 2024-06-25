function exist(board: string[][], word: string): boolean {
    let result = false;
    if (!word.length || !board.length) return result;
    const firstS = word[0];
    const firstSPosition: number[][] = [];
    const m = board.length, n = board[0].length;
    const mark: boolean[][] = [];
    for (let i = 0; i < m; i++) {
        let temp: boolean[] = [];
        for (let j = 0; j < n; j++) {
            temp.push(false);
            if (board[i][j] === firstS) {
                firstSPosition.push([i, j]);
            }
        }
        mark.push(temp);
    }
    if (!firstSPosition.length) return result;
    const backtrack = (row: number, column: number, strIndex: number, curStr: string) => {
        if (curStr.length === word.length) return result = true;
        if (row < 0 || row >= m || column < 0 || column >= n || mark[row][column]) return;
        if (board[row][column] === word[strIndex]) {
            const nextStr = curStr + board[row][column];
            mark[row][column] = true;
            backtrack(row + 1, column, strIndex + 1, nextStr);
            backtrack(row - 1, column, strIndex + 1, nextStr);
            backtrack(row, column + 1, strIndex + 1, nextStr);
            backtrack(row, column - 1, strIndex + 1, nextStr);
            mark[row][column] = false;
        }
    }
    for (let i = 0; i < firstSPosition.length; i++) {
        const [row, column] = firstSPosition[i];
        backtrack(row, column, 0, '');
    }
    return result;
};