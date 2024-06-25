function letterCombinations(digits: string): string[] {
    const result: string[] = [];
    if (!digits.length) return result;
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const backtrack = (digitsIndex: number, track: string[]) => {
        if (track.length === digits.length) return result.push(track.join(''));
        const mapStr = map[digits[digitsIndex]];
        for (let i = 0; i < mapStr.length; i++) {
            const curStr = mapStr[i];
            track.push(curStr);
            digitsIndex++;
            backtrack(digitsIndex, track);
            digitsIndex--;
            track.pop();
        }
    };
    backtrack(0, []);
    return result;
};