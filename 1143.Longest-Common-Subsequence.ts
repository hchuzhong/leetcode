function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    const dp: number[][] = [];
    for (let i = 0; i <=m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return dp[m][n];
};