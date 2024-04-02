function majorityElement1(nums: number[]): number {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const curNum = nums[i];
        if (!map[curNum]) map[curNum] = 0;
        map[curNum]++;
        if (map[curNum] > Math.floor(length / 2)) return curNum;
    }
};

function majorityElement2(nums: number[]): number {
    nums = nums.sort((a, b) => (a - b));
    return nums[Math.floor(nums.length / 2)];
};