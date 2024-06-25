function canPartition(nums: number[]): boolean {
    const n = nums.length;
    let sum = 0;
    if (n === 1) return false;
    nums.forEach(num => sum += num);
    if (sum % 2 !== 0) return false;
    sum = sum / 2;
    const dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        for (let j = sum; j >= 0; j--) {
            if (j - nums[i] >= 0) {
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
    }
    return dp[sum];
};