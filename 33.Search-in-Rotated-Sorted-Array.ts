function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;
        if (nums[mid] === target) return mid;
        if (nums[left] < nums[mid]) {
            (target >= nums[left] && target < nums[mid]) ? right = mid - 1 : left = mid + 1;
        } else {
            (target > nums[mid] && target <= nums[right]) ? left = mid + 1 : right = mid - 1;
        }
    }
    return -1;
};