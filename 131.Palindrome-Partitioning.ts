const isPalindrome = (s: string, left: number, right: number) => {
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }
    return true;
}

function partition(s: string): string[][] {
    const n = s.length;
    let ans: string[][] = [], path: string[] = [];
    const dfs = (i: number, start: number) => {
        if (i === n) return ans.push([...path]);
        if (i < n - 1) dfs(i + 1, start);
        if (isPalindrome(s, start, i)) {
            path.push(s.substring(start, i + 1));
            dfs(i + 1, i + 1);
            path.pop();
        }
    }
    dfs(0, 0);
    return ans;
};