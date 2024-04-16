const map = {1: 1, 0: 1};
function climbStairs(n: number): number {
    if (map[n]) return map[n];
    map[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return map[n];
};