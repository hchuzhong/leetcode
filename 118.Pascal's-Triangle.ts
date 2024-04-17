function generate(numRows: number): number[][] {
    const result: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        const arr = new Array(i + 1).fill(1);
        const lastArr = result[i - 1];
        for (let i = 1; i < lastArr.length; i++) {
            arr[i] = lastArr[i - 1] + lastArr[i];
        }
        result.push(arr);
    }
    return result;
};