function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;
    const result: number[] = new Array(length).fill(0);
    const stack: number[][] = [];
    for (let i = length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1][0] <= temperatures[i]) stack.pop();
        stack.length && (result[i] = stack[stack.length - 1][1] - i);
        stack.push([temperatures[i], i]);
    }
    return result;
};