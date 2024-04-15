function partitionLabels(s: string): number[] {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i;
    }

    let num = 0, last = map[s[0]];
    const result: number[] = [];
    for (let i = 0; i < s.length; i++) {
        num +=1;
        if (map[s[i]] > last) {
            last = map[s[i]];
        }
        if (i === last) {
            result.push(num);
            num = 0;
        }
    }
    return result;
};