class ListNode {
    key: number;
    value: number;
    prev: null | ListNode;
    next: null | ListNode;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList {
    head = new ListNode(0, 0);
    tail = new ListNode(0, 0);
    size = 0;
    constructor() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    addLast(x: ListNode) {
        x.prev = this.tail.prev;
        x.next = this.tail;
        this.tail!.prev!.next = x;
        this.tail.prev = x;
        this.size++;
    }
    remove(x: ListNode) {
        x!.prev!.next = x.next;
        x!.next!.prev = x.prev;
        this.size--;
    }
    removeFirst() {
        if (this.head.next === this.tail) return null;
        const first = this.head.next;
        this.remove(first as ListNode);
        return first;
    }
}

class LRUCache {
    capacity: number;
    map = {};
    cache = new DoubleList();
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.map[key]) return -1;
        this.makeRecently(key);
        return this.map[key].value;
    }

    put(key: number, value: number): void {
        if (this.map[key]) {
            this.map[key].value = value;
            this.makeRecently(key);
            return;
        }
        if (this.cache.size >= this.capacity) this.removeLeastRecently();
        this.addRecently(key, value);
    }

    makeRecently(key: number) {
        const x = this.map[key];
        this.cache.remove(x);
        this.cache.addLast(x);
    }

    addRecently(key: number, val: number) {
        const x = new ListNode(key, val);
        this.cache.addLast(x);
        this.map[key] = x;
    }

    deleteKey(key) {
        const x = this.map[key];
        this.cache.remove(x);
        this.map[x] = null;
    }

    removeLeastRecently() {
        const deleteListNode = this.cache.removeFirst();
        this.map[deleteListNode!.key] = null;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */