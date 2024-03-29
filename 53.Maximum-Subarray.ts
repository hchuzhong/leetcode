function maxSubArray1(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const length = nums.length;
    let dp = new Array(length).fill(Number.NEGATIVE_INFINITY);
    let res = dp[0] = nums[0];
    for (let i = 1; i < length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = Math.max(dp[i], res);
    }
    return res;
};

function maxSubArray2(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const length = nums.length;
    let res = nums[0];
    let pre = nums[0];
    for (let i = 1; i < length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        res = Math.max(pre, res);
    }
    return res;
};