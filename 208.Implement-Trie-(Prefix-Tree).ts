class Trie {
    arr: string[];
    constructor() {
        this.arr = [];
    }

    insert(word: string): void {
        if (!this.search(word))this.arr.push(word);
    }

    search(word: string): boolean {
        let result = false;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === word) {
                result = true;
                break;
            }
        }
        return result;
    }

    startsWith(prefix: string): boolean {
        let result = false;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].startsWith(prefix)) {
                result = true;
                break;
            }
        }
        return result;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */