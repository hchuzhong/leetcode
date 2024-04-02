function majorityElement(nums: number[]): number {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const curNum = nums[i];
        if (!map[curNum]) map[curNum] = 0;
        map[curNum]++;
        if (map[curNum] > Math.floor(length / 2)) return curNum;
    }
};