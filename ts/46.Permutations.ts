function permute1(nums: number[]): number[][] {
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

function permute2(nums: number[]): number[][] {
    if (nums.length === 0) return [];
    const result: number[][] = [];
    const mark = {};
    nums.forEach(num => mark[num] = false);
    let backtrack = (track: number[]) => {
        if (track.length === nums.length) {
            result.push([...track]);
            return;
        }
        for (const num of nums) {
            if (mark[num]) continue;
            track.push(num);
            mark[num] = true;
            backtrack(track);
            mark[num] = false;
            track.pop();
        }
    }
    backtrack([]);
    return result;
};