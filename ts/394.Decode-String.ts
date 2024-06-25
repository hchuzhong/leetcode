function decodeString(s: string): string {
    let numStack: number[] = [];
    let strStack: string[] = [];
    let ans = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!isNaN(Number(c))) {
            count = count * 10 + parseInt(c);
        } else if (c === '[') {
            strStack.push(ans);
            ans = '';
            numStack.push(count);
            count = 0;
        } else if (c === ']') {
            const times = numStack.pop() as number;
            ans = strStack.pop() + ans.repeat(times);
        } else {
            ans += c;
        }
    }
    return ans;
};