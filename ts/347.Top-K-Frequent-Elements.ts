function topKFrequent1(nums: number[], k: number): number[] {
    const map = {};
    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }
    const tempArr: number[][] = [];
    for (const key in map) {
        tempArr.push([key, map[key]]);
    }
    tempArr.sort((a, b) => (b[1] - a[1]));
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(tempArr[i][0]);
    }
    return result;
};