// https://leetcode.cn/problems/sliding-window-maximum/solutions/2499715/shi-pin-yi-ge-shi-pin-miao-dong-dan-diao-ezj6/?envType=study-plan-v2&envId=top-100-liked

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const queue: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        while (queue.length && nums[queue[queue.length - 1]] <= curNum) queue.pop();
        queue.push(i);
        if (i - queue[0] >= k) queue.shift();
        if (i >= k - 1) result.push(nums[queue[0]]);
    }
    return result;
};