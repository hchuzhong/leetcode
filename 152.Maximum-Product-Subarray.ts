function maxProduct(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let max = Number.MIN_VALUE, imax = 1, imin = 1;
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        if (curNum < 0) {
            let temp = imax;
            imax = imin;
            imin = temp;
        }
        imax = Math.max(imax * curNum, curNum);
        imin = Math.min(imin * curNum, curNum);

        max = Math.max(max, imax);
    }
    return max;
};