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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result = new ListNode();
    let head = result;
    let addOne = false;
    while (l1 || l2) {
        head.val = (l1?.val ?? 0) + (l2?.val ?? 0) + (addOne ? 1 : 0);
        addOne = head.val >= 10;
        addOne && (head.val -= 10);
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        if (l1 || l2) {
            head.next = new ListNode();
            head = head.next;
        } else if (addOne) {
            head.next = new ListNode(1);
            head = head.next;
        }
    }
    return result;
};