function productExceptSelf(nums: number[]): number[] {
    let result: number[] = [];
    let all = 1;
    const zeroArr = [];
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        if (curNum === 0) {
            zeroArr.push(i);
            continue;
        }
        all *= curNum;
    }
    if (zeroArr.length >= 2) {
        result = new Array(nums.length).fill(0);
        return result;
    }
    const hasZero = zeroArr.length > 0;
    const zeroPosition = hasZero ? zeroArr[0] : -1;
    for (let i = 0; i < nums.length; i++) {
        let tempResult = 0;
        if (hasZero) {
            if (i === zeroPosition) tempResult = all;
            else tempResult = 0;
        } else {
            tempResult = all / nums[i];
        }
        result.push(tempResult);
    }
    return result;
};