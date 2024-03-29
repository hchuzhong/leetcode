function solveNQueens(n: number): string[][] {
    let result: string[][] = [];
    let tag = new Array(n);
    for (let i = 0; i < n; i++) {
        tag[i] = new Array(n).fill('.');
    }
    const isValid = (tag: string[][], row: number, col: number) => {
        for (let i = 0; i < n; i++) {
            if (tag[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (tag[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (tag[i][j] === 'Q') return false;
        }
        return true;
    }
    const trackback = (tag: string[][], row: number) => {
        if (row === n) {
            const tempResult: string[] = [];
            for (let i = 0; i < n; i++) {
                tempResult[i] = tag[i].join('');
            }
            return result.push(tempResult);
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(tag, row, col)) continue;
            tag[row][col] = 'Q';
            trackback(tag, row + 1);
            tag[row][col] = '.';
        }
    }
    trackback(tag, 0);
    return result;
};