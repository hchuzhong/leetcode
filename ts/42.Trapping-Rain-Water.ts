// Find the two highest values in a range, and you need to subtract the size of the middle block
function trap1(height: number[]): number {
    const length = height.length;
    let result = 0;
    if (length < 3) return result;
    let left = 0;
    // calculate the effective area between left and right
    const getCurResult = (left: number, right: number) => {
        let extractPart = 0;
        for (let i = left + 1; i < right; i++) {
            extractPart += height[i];
        }
        return (right - left - 1) * Math.min(height[left], height[right]) - extractPart;
    }
    while (left < length) {
        // rain water can't be receivew when height [left] < height [right], because it is a upward ladder shape
        if (height[left] < height[left + 1]) {
            left++;
            continue;
        }
        let right = left + 1;
        while (height[left] > height[right] && right < length) right++;
        // When right is length, it means that the current height [left] is the maximum value between left to right. We need to find the largest value in the range of left + 1 to right and the farthest from lift, calculate the amount of rain water in this range, and take the position of this value as the next left
        if (right >= length) {
            let maxRightNum = 0, maxRightNumPosition = 0;
            for (let i = left + 1; i < length; i++) {
                maxRightNum = Math.max(maxRightNum, height[i]);
                if (height[i] >= maxRightNum) maxRightNumPosition = i;
            }
            if (left === length - 1 && maxRightNumPosition === 0) break;
            result += getCurResult(left, maxRightNumPosition);
            left = Math.max(left + 1, maxRightNumPosition);
            continue;
        }
        if (right - left > 1) {
            result += getCurResult(left, right);
            left = right;
            continue;
        }
        left++;
    }
    return result;
};

function trap2(height: number[]): number {
    let result = 0;
    const length = height.length;
    const maxLeftArr = new Array(length), maxRightArr = new Array(length);
    maxLeftArr[0] = height[0];
    maxRightArr[length - 1] = height[length - 1];
    for (let i = 1; i < length - 1; i++) {
        maxLeftArr[i] = Math.max(maxLeftArr[i - 1], height[i - 1]);
    }
    for (let i = length - 2; i >= 0; i--) {
        maxRightArr[i] = Math.max(maxRightArr[i + 1], height[i + 1]);
    }
    for (let i = 1; i < length; i++) {
        const min = Math.min(maxLeftArr[i], maxRightArr[i])
        if (min > height[i]) result += (min - height[i]);
    }
    return result;
};

function trap3(height: number[]): number {
    let result = 0;
    const length = height.length;
    let maxLeft = 0, maxRight = 0;
    let left = 1, right = length - 2;
    for (let i = 1; i < length - 1; i++) {
        if (height[left - 1] < height[right + 1]) {
            maxLeft = Math.max(maxLeft, height[left - 1])
            if (maxLeft > height[left]) result += (maxLeft - height[left])
            left++;
        } else {
            maxRight = Math.max(maxRight, height[right + 1]);
            if (maxRight > height[right]) result += (maxRight - height[right]);
            right--;
        }
    }
    return result;
};