function uniquePaths1(m: number, n: number): number {
    const tempArr = new Array(n).fill(0);
    const dp = new Array(m).fill([...tempArr]);
    for (let i = 0; i < n; i++) dp[0][i] = 1;
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

function uniquePaths2(m: number, n: number): number {
    let pre = new Array(n).fill(1);
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] = cur[j - 1] + pre[j];
        }
        pre = [...cur]
    }
    return cur[n - 1];
};

function uniquePaths3(m: number, n: number): number {
    const cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] += cur[j - 1];
        }
    }
    return cur[n - 1];
};