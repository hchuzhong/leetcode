function longestPalindrome(s: string): string {
    const len = s.length;
    if (len === 1) return s;
    let res = "";
    const judgeString = (left: number, right: number): string => {
        while (s[left] === s[right] && left >= 0 && right < len) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
    for (let i = 0; i < s.length; i++) {
        const s1 = judgeString(i, i);
        const s2 = judgeString(i, i + 1);
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res;
};