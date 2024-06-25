function lengthOfLIS(nums: number[]): number {
    const length = nums.length;
    let result = 0;
    if (!length) return result;
    const dp = new Array(length).fill(1);
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        result = Math.max(result, dp[i]);
    }
    return result;
};