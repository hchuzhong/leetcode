function findDuplicate(nums: number[]): number {
    let fast = 0, slow = 0;
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (fast === slow) break;
    }
    let finder = 0;
    while (true) {
        finder = nums[finder];
        slow = nums[slow];
        if (slow === finder) break;
    }
    return slow;
};