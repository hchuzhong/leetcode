class MinStack {
    arr: number[][];
    constructor() {
        this.arr = [];
    }

    push(val: number): void {
        let min = val;
        if (this.arr.length) {
            const lastMin = this.arr[this.arr.length - 1][1];
            min = Math.min(min, lastMin)
        }
        this.arr.push([val, min]);
    }

    pop(): void {
        this.arr.pop();
    }

    top(): number {
        return this.arr[this.arr.length - 1][0];
    }

    getMin(): number {
        return this.arr[this.arr.length - 1][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */