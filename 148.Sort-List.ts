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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let pre = new ListNode();
    pre.next = head;
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    arr.sort((a, b) => a - b);
    head = pre.next;
    for (let i = 0; i < arr.length; i++) {
        head.val = arr[i];
        head = head.next;
    }
    return pre.next;
};