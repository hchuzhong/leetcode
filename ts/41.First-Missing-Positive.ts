function firstMissingPositive1(nums: number[]): number {
    const map = {};
    nums.forEach(num => map[num] = true);
    for (let i = 1; i <= nums.length; i++) {
        if (!map[i]) return i;
    }
    return nums.length + 1;
};

function firstMissingPositive2(nums: number[]): number {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
};