function threeSum(nums: number[]): number[][] {
    const length = nums.length;
    const result: number[][] = [];
    if (length < 3) return result;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < length; i++) {
        const curNum = nums[i];
        if (curNum > 0) return result;
        if (i > 0 && curNum === nums[i - 1]) continue;
        let left = i + 1, right = length - 1;
        while (left < right) {
            const leftNum = nums[left], rightNum = nums[right];
            if (curNum + leftNum + rightNum === 0) {
                result.push([curNum, leftNum, rightNum]);
                while (left < right && leftNum === nums[left + 1]) left++;
                while (left < right && rightNum === nums[right - 1]) right--;
                left++;
                right--;
            } else if (curNum + leftNum + rightNum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};