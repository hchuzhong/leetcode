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

function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let lengthA = 0, lengthB = 0;
    let tempHeadA = headA, tempHeadB = headB;
    while (tempHeadA.next) {
        tempHeadA = tempHeadA.next;
        lengthA++;
    }
    while (tempHeadB.next) {
        tempHeadB = tempHeadB.next;
        lengthB++;
    }
    let sub = Math.abs(lengthA - lengthB);
    let longerList = lengthA > lengthB ? headA : headB;
    let anotherList = lengthA > lengthB ? headB : headA;
    while (sub > 0) {
        longerList = longerList.next;
        sub--;
    }
    while (longerList && anotherList) {
        if (longerList === anotherList) return longerList;
        longerList = longerList.next;
        anotherList = anotherList.next;
    }
    return longerList;
};

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA, p2 = headB;
    while (p1 !== p2) {
        if (p1 === null) p1 = headB;
        else p1 = p1.next;
        if (p2 === null) p2 = headA;
        else p2 = p2.next;
    }
    return p1;
};