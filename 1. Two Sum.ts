function twoSum(nums: number[], target: number): number[] {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const subTarget = target - curNum;
        if (map[subTarget] || map[subTarget] === 0) return [map[subTarget], i];
        map[curNum] = i;
    }
    return [];
};