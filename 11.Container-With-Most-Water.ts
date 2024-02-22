function maxArea(height: number[]): number {
    let result = 0;
    let left = 0, right = height.length - 1;
    while (left !== right) {
        const leftHeight = height[left], rightHeight = height[right];
        const curResult = (right - left) * Math.min(leftHeight, rightHeight);
        if (leftHeight < rightHeight) left++;
        else right--;
        result = Math.max(curResult, result);
    }
    return result;
};