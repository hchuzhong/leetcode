const defaultCmp = (x, y) => x > y;
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
class Heap {
    container: number[];
    cmp: Function;
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }
    insert(data: number) {
        const {container, cmp} = this;
        container.push(data);
        let index = container.length - 1;
        while (index) {
            const parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) return;
            swap(container, index, parent);
            index = parent;
        }
    }
    extract() {
        const {container, cmp} = this;
        const length = container.length;
        if (!length) return null;

        swap(container, 0, length - 1);
        const res = container.pop();
        let index = 0, exchange = index * 2 + 1;

        while (exchange < length) {
            const right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) exchange = right;
            if (!cmp(container[exchange], container[index])) break;
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return res;
    }
    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}

class MedianFinder {
    maxHeap: Heap;
    minHeap: Heap;
    constructor() {
        this.maxHeap = new Heap();
        this.minHeap = new Heap((x, y) => x < y);
    }

    addNum(num: number): void {
        this.maxHeap.insert(num);
        this.minHeap.insert(this.maxHeap.top());
        this.maxHeap.extract();
        if (this.maxHeap.container.length < this.minHeap.container.length) {
            this.maxHeap.insert(this.minHeap.top());
            this.minHeap.extract();
        }
    }

    findMedian(): number {
        return this.maxHeap.container.length > this.minHeap.container.length ? this.maxHeap.top() : (this.maxHeap.top() + this.minHeap.top()) / 2;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */