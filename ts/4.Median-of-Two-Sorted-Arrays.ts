function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length, n = nums2.length;
    const length = m + n;
    let left = -1, right = -1;
    let aStart = 0, bStart = 0;
    for (let i = 0; i <= length / 2; i++) {
        left = right;
        if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
            right = nums1[aStart++];
        } else {
            right = nums2[bStart++];
        }
    }
    if (length % 2 === 0) return (left + right) / 2;
    return right;
};