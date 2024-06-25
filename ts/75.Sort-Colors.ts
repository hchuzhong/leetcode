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

function sortColors2(nums: number[]): void {
    const length = nums.length;
    if (length < 2) return;
    let zero = 0, two = length, i = 0;
    const swap = (index1: number, index2: number): void => {
        if (index1 === index2) return;
        const temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
    while (i < two) {
        if (nums[i] === 0) {
            swap(i, zero);
            zero++;
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else {
            two--;
            swap(i, two);
        }
    }
};