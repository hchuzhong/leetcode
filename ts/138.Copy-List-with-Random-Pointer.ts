/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList1(head: Node | null): Node | null {
    if (!head) return null;
    let result = new Node(head.val);
    let resultHead = result;
    let tempHead = head.next;
    while (tempHead) {
        resultHead.next = new Node(tempHead.val);
        resultHead = resultHead.next;
        tempHead = tempHead.next;
    }
    tempHead = head;
    resultHead = result;
    while (tempHead) {
        if (tempHead.random !== null) {
            let randomHead = head, randomResultHead = result;
            while (randomHead !== tempHead.random) {
                randomHead = randomHead.next;
                randomResultHead = randomResultHead.next;
            }
            resultHead.random = randomResultHead;
        }
        tempHead = tempHead.next;
        resultHead = resultHead.next;
    }
    return result;
};

function copyRandomList2(head: Node | null): Node | null {
    if (!head) return null;
    let cur = head;
    const map = new Map();
    map.set(null, null);
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while (cur) {
        map.get(cur).next = map.get(cur.next);
        map.get(cur).random = map.get(cur.random);
        cur = cur.next;
    }
    return map.get(head);
};

function copyRandomList3(head: Node | null): Node | null {
    if (!head) return null;
    let cur = head;
    const map = new Map();
    map.set(null, null);
    while (cur) {
        let temp = new Node(cur.val);
        temp.next = cur.next;
        cur.next = temp;
        cur = temp.next;
    }
    cur = head;
    while (cur) {
        if (cur.random) cur.next.random = cur.random.next;
        cur = cur.next.next;
    }
    cur = head.next;
    let pre = head, res = head.next;
    while (cur.next) {
        pre.next = pre.next.next;
        cur.next = cur.next.next;
        pre = pre.next;
        cur = cur.next;
    }
    pre.next = null;
    return res;
};