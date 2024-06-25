function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const curS = s[i];
        if (curS === '(' || curS === '{' || curS === '[') stack.push(curS);
        else {
            if (stack.length === 0) return false;
            const lastS = stack.pop();
            if (curS === ')' && lastS === '(') continue;
            if (curS === '}' && lastS === '{') continue;
            if (curS === ']' && lastS === '[') continue;
            return false;
        }
    }
    return stack.length === 0;
};