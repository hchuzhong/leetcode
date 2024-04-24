function wordBreak(s: string, wordDict: string[]): boolean {
    const length = s.length;
    const dp = new Array(length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < length; i++) {
        if (!dp[i]) continue;
        for (const word of wordDict) {
            if (word.length + i <= s.length && s.startsWith(word, i)) {
                dp[i + word.length] = true;
            }
        }
    }
    return dp[length];
};