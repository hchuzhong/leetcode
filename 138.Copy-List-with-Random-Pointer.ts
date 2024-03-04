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

function copyRandomList(head: Node | null): Node | null {
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