/**
    Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const length = nums.length;
    if (length <= 1) return;
    const swap = (i: number, j: number): void => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    let pos = -1;
    for (let i = length - 1; i >= 1; i--) {
        if (nums[i - 1] < nums[i]) {
            pos = i - 1;
            break;
        }
    }
    if (pos === -1) {
        nums.reverse();
        return;
    }
    for (let i = length - 1; i > pos; i--) {
        if (nums[pos] < nums[i]) {
            swap(pos, i);
            break;
        }
    }
    for (let i = pos + 1, j = length - 1; i < j; i++, j--) {
        swap(i, j);
    }
};