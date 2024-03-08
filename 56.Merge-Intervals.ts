function merge(intervals: number[][]): number[][] {
    const result: number[][] = [];
    let i = 0;
    intervals = intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
    while (i < intervals.length) {
        const curLeft = intervals[i][0], curRight = intervals[i][1];
        let right = curRight;
        let j = i + 1;
        while (j < intervals.length) {
            const jLeft = intervals[j][0], jRight = intervals[j][1];
            if (right < jLeft) break;
            if (right >= jLeft && right <= jRight) {
                right = jRight;
            }
            j++;
        }
        i = j;
        result.push([curLeft, right]);
    }
    return result;
};