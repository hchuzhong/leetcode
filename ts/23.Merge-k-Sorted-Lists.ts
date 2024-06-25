/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function merge2List(a: ListNode | null, b: ListNode | null): ListNode | null {
    if (!a) return b;
    if (!b) return a;
    const head = new ListNode();
    let tail = head, aPtr = a, bPtr = b;
    while (aPtr && bPtr) {
        if (aPtr.val > bPtr.val) {
            tail.next = bPtr;
            bPtr = bPtr.next!;
        } else {
            tail.next = aPtr;
            aPtr = aPtr.next!;
        }
        tail = tail.next;
    }
    tail.next = aPtr ? aPtr : bPtr;
    return head.next;
}

function mergeKLists1(lists: Array<ListNode | null>): ListNode | null {
    let ans: ListNode | null = null;
    for (let i = 0; i < lists.length; i++) {
        ans = merge2List(ans, lists[i]);
    }
    return ans;
};

function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
    const merge = (left: number, right: number) => {
        if (left === right) return lists[left];
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        return merge2List(merge(left, mid), merge(mid + 1, right));
    }
    return merge(0, lists.length - 1);
};