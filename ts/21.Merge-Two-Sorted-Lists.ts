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

function mergeTwoLists1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    let result = list1.val > list2.val ? list2 : list1;
    let head = result;
    while (list1 || list2) {
        if (!list1 || !list2) {
            head.next = list1 ? list1 : list2;
            break;
        }
        let tempList1 = list1.next, tempList2 = list2.next;
        if (list1.val > list2.val) {
            head.next = list2;
            head = head.next;
            list2 = tempList2;
        } else {
            head.next = list1;
            head = head.next;
            list1 = tempList1;
        }
    }
    return result;
};

function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
};