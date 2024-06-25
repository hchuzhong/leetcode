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

function detectCycle1(head: ListNode | null): ListNode | null {
    let map = new Map();
    while (head) {
        if (map.has(head)) return head;
        map.set(head, true);
        head = head.next;
    }
    return null;
};

function detectCycle2(head: ListNode | null): ListNode | null {
    let fast = head, slow = head;
    while (true) {
        if (!fast || !fast.next) return null;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};