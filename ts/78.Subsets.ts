function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    let track: number[] = [];
    const backtrack = (start: number) => {
        result.push([...track]);
        for (let i = start; i < nums.length; i++) {
            track.push(nums[i]);
            backtrack(i + 1);
            track.pop();
        }
    };
    backtrack(0);
    return result;
};