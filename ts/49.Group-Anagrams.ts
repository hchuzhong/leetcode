function groupAnagrams(strs: string[]): string[][] {
    const map = {};
    strs.forEach(str => {
        const sortResult = str.split('').sort().join('');
        if (!map[sortResult]) map[sortResult] = [];
        map[sortResult].push(str);
    })
    return Object.values(map);
};