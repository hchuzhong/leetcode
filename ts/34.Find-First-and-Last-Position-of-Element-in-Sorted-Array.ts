function searchRange(nums: number[], target: number): number[] {
    const length = nums.length;
    let result = [-1, -1];
    if (length === 0) return result;
    if (nums[0] > target) return result;
    if (nums[length - 1] < target) return result; 
    let left = 0, right = length - 1;
    while (left < right && nums[left] !== nums[right]) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) left = mid + 1;
        else if (nums[mid] > target) right = mid - 1;
        else {
            if (nums[left] !== target) left++;
            if (nums[right] !== target) right--;
        }
    }
    result[0] = nums[left] === target ? left : -1;
    result[1] = nums[right] === target ? right : -1;
    return result;
};