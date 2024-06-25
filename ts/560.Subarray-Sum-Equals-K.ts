function subarraySum1(nums: number[], k: number): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) result++;
        }
    }
    return result;
};

function subarraySum2(nums: number[], k: number): number {
    let len = nums.length;
    let preSum: number[] = [];
    preSum[0] = 0;
    for (let i = 0; i < len; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }
    let count = 0;
    for (let left = 0; left < len; left++) {
        for (let right = left; right < len; right++) {
            if (preSum[right + 1] - preSum[left] === k) count++;
        }
    }
    return count;
};

function subarraySum3(nums: number[], k: number): number {
    let len = nums.length;
    let map = new Map();
    map.set(0, 1);
    let preSum = 0, count = 0;
    for (let i = 0; i < len; i++) {
        const curNum = nums[i];
        preSum += curNum;
        if (map.has(preSum - k)) count += map.get(preSum - k);
        map.set(preSum, (map.get(preSum) ?? 0) + 1);
    }
    return count;
};