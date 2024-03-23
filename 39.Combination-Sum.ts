function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = [];
    const length = candidates.length;
    if (!length) return result;
    const backtrack = (track: number[], begin: number, selfTarget: number) => {
        if (selfTarget < 0) return;
        if (selfTarget === 0) return result.push([...track]);
        for (let i = begin; i < length; i++) {
            track.push(candidates[i]);
            backtrack(track, i, selfTarget - candidates[i]);
            track.pop();
        }
    }
    backtrack([], 0, target);
    return result;
};