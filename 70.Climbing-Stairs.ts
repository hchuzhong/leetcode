const map = {1: 1, 0: 1};
function climbStairs1(n: number): number {
    if (map[n]) return map[n];
    map[n] = climbStairs1(n - 1) + climbStairs1(n - 2);
    return map[n];
};

function climbStairs2(n: number): number {
    let a = 1, b = 1, sum = 0;
    for (let i = 0; i < n - 1; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};