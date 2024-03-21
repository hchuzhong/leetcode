function permute(nums: number[]): number[][] {
    if (nums.length === 0) return [];
    const result: number[][] = [];
    let backtrack = (track: number[]) => {
        if (track.length === nums.length) {
            result.push([...track]);
            return;
        }
        for (const num of nums) {
            if (track.includes(num)) continue;
            track.push(num);
            backtrack(track);
            track.pop();
        }
    }
    backtrack([]);
    return result;
};