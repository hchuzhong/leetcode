function combinationSum1(candidates: number[], target: number): number[][] {
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

function combinationSum2(candidates: number[], target: number): number[][] {
    let result: number[][] = [];
    const length = candidates.length;
    if (!length) return result;
    candidates = candidates.sort((a, b) => a - b);
    const backtrack = (track: number[], begin: number, selfTarget: number) => {
        if (selfTarget === 0) return result.push([...track]);
        for (let i = begin; i < length; i++) {
            if (selfTarget - candidates[i] < 0) break;
            track.push(candidates[i]);
            backtrack(track, i, selfTarget - candidates[i]);
            track.pop();
        }
    }
    backtrack([], 0, target);
    return result;
};