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

function swapPairs1(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let left = head, right = head.next;
    const result = right;
    while (right) {
        let nextLeft = right.next;
        right.next = left;
        left.next = nextLeft && nextLeft.next ? nextLeft.next : nextLeft;
        if (!nextLeft || !nextLeft.next) break;
        left = nextLeft;
        right = nextLeft.next;
    }
    return result;
};

function swapPairs2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};