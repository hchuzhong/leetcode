function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    const left = '(', right = ')';
    const backtrack = (track: string[], leftNum: number, rightNum: number) => {
        if (leftNum === 0 && rightNum === 0) {
            return result.push(track.join(''));
        }
        if (leftNum > 0) {
            track.push(left);
            backtrack(track, leftNum - 1, rightNum);
            track.pop();
        }
        if (leftNum < rightNum && rightNum > 0) {
            track.push(right);
            backtrack(track, leftNum, rightNum - 1);
            track.pop();
        }
    }
    backtrack([], n, n);
    return result;
};