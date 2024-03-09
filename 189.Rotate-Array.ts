/**
    Do not return anything, modify nums in-place instead.
 */
function rotate1(nums: number[], k: number): void {
    if (!k || nums.length === 1) return;
    while (k) {
        nums.splice(0, 0, nums.pop());
        k--;
    }
};

function rotate2(nums: number[], k: number): void {
    if (!k || nums.length === 1) return;
    let tempArr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        tempArr[i] = nums[i];
    }
    while (k > nums.length) {
        k -= nums.length;
    }
    const sub = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        if (i >= k) {
            nums[i] = tempArr[i - k];
        } else {
            nums[i] = tempArr[i + sub];
        }
    }
};