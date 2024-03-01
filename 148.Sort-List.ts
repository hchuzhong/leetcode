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

function sortList2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let fast = head.next, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(temp);
    let h = new ListNode();
    let res = h;
    while (left && right) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    h.next = left ? left : right;
    return res.next;
};