function lengthOfLongestSubstring1(s: string): number {
    if (s.length <= 1) return s.length;
    let result = 0;
    let left = 0, right = 0;
    const map = {};
    const sArr = s.split('');
    while (right < sArr.length) {
        if (map[sArr[right]]) {
            result = Math.max(result, right - left);
            while (sArr[left] !== sArr[right]) {
                map[sArr[left]] = false;
                left++;
            }
            left++;
        }
        map[sArr[right]] = true;
        right++;
    }
    result = Math.max(result, right - left);
    return result;
};

function lengthOfLongestSubstring2(s: string): number {
    if (s.length <= 1) return s.length;
    let result = 0;
    const map = {};
    const arr = [];
    const sArr = s.split('');
    for (let i = 0; i < sArr.length; i++) {
        result = Math.max(result, arr.length);
        if (map[sArr[i]]) {
            while (arr.length && arr[0] !== sArr[i]) map[arr.shift()] = false;
            arr.shift();
        }
        arr.push(sArr[i]);
        map[sArr[i]] = true;
    }
    result = Math.max(result, arr.length);
    return result;
};

function lengthOfLongestSubstring3(s: string): number {
    if (s.length <= 1) return s.length;
    let result = 0;
    let left = 0;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) left = Math.max(left, map.get(s.charAt(i)) + 1);
        map.set(s.charAt(i), i);
        result = Math.max(result, i - left + 1);
    }
    return result;
};