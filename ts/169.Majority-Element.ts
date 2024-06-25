function majorityElement1(nums: number[]): number {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const curNum = nums[i];
        if (!map[curNum]) map[curNum] = 0;
        map[curNum]++;
        if (map[curNum] > Math.floor(length / 2)) return curNum;
    }
    return 0;
};

function majorityElement2(nums: number[]): number {
    nums = nums.sort((a, b) => (a - b));
    return nums[Math.floor(nums.length / 2)];
};

function majorityElement3(nums: number[]): number {
    let votes = 0, count = 0, x = 0;
    for (const num of nums) {
        if (votes === 0) x = num;
        votes += (num === x ? 1 : -1);
    }
    for (const num of nums) {
        if (num === x) count++;
    }
    return count > nums.length / 2 ? x : 0;
};