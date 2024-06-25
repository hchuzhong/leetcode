function jump(nums: number[]): number {
    let result = 0;
    let end = 0;
    let maxPosition = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i === end) {
            result++;
            end = maxPosition;
        }
    }
    return result;
};