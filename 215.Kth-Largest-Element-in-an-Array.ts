function findKthLargest1(nums: number[], k: number): number {
    nums = nums.sort((a, b) => (a - b));
    return nums[nums.length - k];
};