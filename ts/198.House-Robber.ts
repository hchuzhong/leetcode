function rob(nums: number[]): number {
    const length = nums.length;
    let dp1 = 0, dp2 = 0;
    let dpi = 0;
    for (let i = length - 1; i >= 0; i--) {
        dpi = Math.max(dp1, nums[i] + dp2);
        dp2 = dp1;
        dp1 = dpi;
    }
    return dpi;
};