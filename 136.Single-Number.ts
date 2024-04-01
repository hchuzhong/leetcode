function singleNumber1(nums: number[]): number {
    nums = nums.sort((a, b) => (a - b));
    let i = 0;
    for (; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return nums[i];
};

function singleNumber2(nums: number[]): number {
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
};