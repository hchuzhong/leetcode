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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head;
    let a = head, b = head;
    for (let i = 0; i < k; i++) {
        if (!b) return head;
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};

function reverse(a: ListNode | null, b: ListNode | null): ListNode | null {
    let pre = null, cur = a, next = a;
    while (cur !== b) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}