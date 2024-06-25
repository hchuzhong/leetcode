function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    if (nums[left] > target) return 0;
    if (nums[right] < target) return nums.length;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) right = Math.min(right - 1, mid);
        else left = Math.max(left + 1, mid);
    }
    return left;
};