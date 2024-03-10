function firstMissingPositive(nums: number[]): number {
    const map = {};
    nums.forEach(num => map[num] = true);
    for (let i = 1; i <= nums.length; i++) {
        if (!map[i]) return i;
    }
    return nums.length + 1;
};