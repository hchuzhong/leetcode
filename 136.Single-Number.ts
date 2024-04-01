function singleNumber(nums: number[]): number {
    nums = nums.sort((a, b) => (a - b));
    let i = 0;
    for (; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return nums[i];
};