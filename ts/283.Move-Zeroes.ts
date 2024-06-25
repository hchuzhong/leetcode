/**
    Do not return anything, modify nums in-place instead.
*/
function moveZeroes(nums: number[]): void {
    let zeroNums = 0;
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        if (curNum === 0) {
            zeroNums++;
            continue;
        }
        nums[i - zeroNums] = curNum;
        if (zeroNums > 0) {
            nums[i] = 0;
        }
    }
};