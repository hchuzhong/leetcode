function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 0; i < dp.length; i++) {
        for (const coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};