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

function isPalindrome1(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let result = true;
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            result = false;
            break;
        }
        left++;
        right--;
    }
    return result;
};


let left: ListNode;
function isPalindrome2(head: ListNode | null): boolean {
    left = head;
    return reverse(head);
};

function reverse(right: ListNode | null): boolean {
    if (right) {
        if (!reverse(right.next)) return false;
        if (right.val !== left.val) return false;
        left = left.next;
    } 
    return true;
}