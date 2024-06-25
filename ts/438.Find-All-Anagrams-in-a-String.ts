function findAnagrams(s: string, p: string): number[] {
    let need = {}, window = {};
    let needSize = 0;
    for (let i = 0; i < p.length; i++) {
        if (!need[p[i]]) {
            need[p[i]] = 0;
            window[p[i]] = 0;
            needSize++;
        }
        need[p[i]]++;
    }
    let left = 0, right = 0;
    let valid = 0;
    let res: number[] = [];
    while (right < s.length) {
        const c = s[right];
        right++;
        if (need[c]) {
            window[c]++;
            if (window[c] === need[c]) valid++;
        }
        while (right - left >= p.length) {
            if (valid === needSize) res.push(left);
            const d = s[left];
            left++;
            if (need[d]) {
                if (window[d] === need[d]) valid--;
                window[d]--;
            }
        }
    }
    return res;
};