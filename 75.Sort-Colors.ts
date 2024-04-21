/**
    Do not return anything, modify nums in-place instead.
 */
function sortColors1(nums: number[]): void {
    let redNum = 0, whilteNum = 0, blueNum = 0;
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        if (curNum === 0) redNum++;
        else if (curNum === 1) whilteNum++;
        else blueNum++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < redNum) nums[i] = 0;
        else if (i >= redNum && i < (redNum + whilteNum)) nums[i] = 1;
        else nums[i] = 2;
    }
};