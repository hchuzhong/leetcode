function findKthLargest1(nums: number[], k: number): number {
    nums = nums.sort((a, b) => (a - b));
    return nums[nums.length - k];
};

function findKthLargest2(nums: number[], k: number): number {
    const qucikSelect = (nums: number[], k: number) => {
        const p = nums[Math.floor(Math.random() * nums.length)];
        const big: number[] = [], equal: number[] = [], small: number[] = [];
        for (const num of nums) {
            if (num < p) small.push(num);
            else if (num === p) equal.push(num);
            else big.push(num);
        }
        if (k <= big.length) {
            return qucikSelect(big, k);
        }
        if (big.length + equal.length < k) {
            return qucikSelect(small, k - big.length - equal.length);
        }
        return p;
    }
    return qucikSelect(nums, k);
};