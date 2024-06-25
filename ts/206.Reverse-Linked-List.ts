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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let next = head.next;
    head.next = null;
    while (next) {
        let temp = next.next;
        next.next = head;
        head = next;
        next = temp;
    }
    return head;
};