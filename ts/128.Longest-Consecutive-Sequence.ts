function longestConsecutive1(nums: number[]): number {
    if (nums.length <= 1) return nums.length;
    const map = {};
    nums.forEach(num => (map[num] = num))
    const sortNums: number[] = Object.values(map);
    sortNums.sort((a: number, b: number) => a - b);
    let result = 1;
    let tempResult = 1;
    for (let i = 0; i < sortNums.length - 1; i++) {
        const curNum = sortNums[i], nextNum = sortNums[i + 1];
        if (nextNum - curNum === 1) tempResult++;
        else tempResult = 1;
        result = Math.max(result, tempResult);
    }
    return result;
};

function longestConsecutive2(nums: number[]): number {
    const set = new Set();
    let result = 0;
    nums.forEach(num => set.add(num));
    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        if (set.has(curNum - 1)) continue;
        let tempResult = 1;
        while(set.has(++curNum)) tempResult++;
        result = Math.max(result, tempResult);
    }
    return result;
};