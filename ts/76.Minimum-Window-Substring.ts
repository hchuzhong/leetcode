function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";
    const tWindow = {};
    let tWindowLength = 0;
    for (let i = 0; i < t.length; i++) {
        const curStr = t[i];
        if (!tWindow[curStr]) {
            tWindow[curStr] = 0;
            tWindowLength++;
        }
        tWindow[curStr]++;
    }

    const window = {};
    let left = 0, right = 0;
    let start = 0, len = Math.pow(10, 5) + 1;
    let valid = 0;
    while (right < s.length) {
        const c = s[right];
        right++;
        if (tWindow[c]) {
            if (!window[c]) window[c] = 0;
            window[c]++;
            if (window[c] === tWindow[c]) valid++;
        }
        while (valid === tWindowLength) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            const d = s[left];
            left++;
            if (tWindow[d]) {
                if (window[d] === tWindow[d]) valid--;
                window[d]--;
            }
        }
    }
    return len === Math.pow(10, 5) + 1 ? "" : s.slice(start, start + len);
};