function longestValidParentheses(s: string): number {
    const length = s.length;
    const dp = new Array(length).fill(0);
    let maxVal = 0;
    for (let i = 1; i < length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = 2;
                if (i - 2 >= 0) dp[i] = dp[i] + dp[i - 2];
            } else if (dp[i - 1] > 0) {
                if ((i - dp[i - 1] - 1) >= 0 && s[i - dp[i - 1] - 1] === '(') {
                    dp[i] = dp[i - 1] + 2;
                    if ((i - dp[i - 1] - 2) >= 0) dp[i] = dp[i] + dp[i - dp[i - 1] - 2];
                }
            }
        }
        maxVal = Math.max(maxVal, dp[i]);
    }
    return maxVal;
};