function largestRectangleArea(heights: number[]): number {
    let length = heights.length;
    if (!length) return 0;
    if (length === 1) return heights[0];
    let res = 0;
    const newHeights = [...heights];
    newHeights.push(0);
    newHeights.unshift(0);
    length += 2;
    const stack = new Array(length);
    stack.push(0);
    for (let i = 1; i < length; i++) {
        while (newHeights[i] < newHeights[stack[stack.length - 1]]) {
            const curHeight = newHeights[stack.pop()];
            const curWidth = i - stack[stack.length - 1] - 1;
            res = Math.max(res, curHeight * curWidth);
        }
        stack.push(i);
    }
    return res;
};