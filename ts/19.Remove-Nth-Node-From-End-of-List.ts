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

function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    let temp = head;
    while (temp) {
        length++;
        temp = temp.next;
    }
    let position = length - n;
    if (position === 0) return head.next;
    temp = head;
    while (position !== 1) {
        temp = temp.next;
        position--;
    }
    if (!temp.next.next) temp.next = null;
    else {
        temp.next = temp.next.next;
    }
    return head;
};

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    let pre = new ListNode();
    pre.next = head;
    let start = pre, end = pre;
    while (n) {
        start = start.next;
        n--;
    }
    while (start.next) {
        start = start.next;
        end = end.next;
    }
    end.next = end.next.next;
    return pre.next;
};