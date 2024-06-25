function findMin(nums: number[]): number {
    const getMinNum = (numArray: number[]): number => {
        let min = numArray[0];
        for (let i = 1; i < numArray.length; i++) {
            min = Math.min(min, numArray[i]);
        }
        return min;
    }
    
    let left = 0, right = nums.length - 1;
    let min = nums[left];
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const leftNum = nums[left], midNum = nums[mid], rightNum = nums[right];
        if (leftNum < midNum && midNum < rightNum) {
            min = Math.min(min, leftNum);
            break;
        } else if (rightNum < leftNum && leftNum < midNum) {
            min = Math.min(min, rightNum);
            left = mid + 1;
        } else if (midNum < rightNum && rightNum < leftNum) {
            min = Math.min(min, midNum);
            right = mid - 1;
            left++;
        } else {
            min = getMinNum([min, leftNum, midNum, rightNum]);
            left++;
            right--;
        }
    }
    return min;
};