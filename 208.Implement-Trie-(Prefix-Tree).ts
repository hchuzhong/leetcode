class Trie1 {
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

class TireNode {
    isEnd: boolean;
    next: TireNode[];
    
    constructor() {
        this.isEnd = false;
        this.next = new Array(26);
    }
}

class Trie2 {
    root: TireNode;
    constructor() {
        this.root = new TireNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const aCode = 'a'.charCodeAt(0);
            const curCode = word[i].charCodeAt(0);
            if (!node.next[curCode - aCode]) {
                node.next[curCode - aCode] = new TireNode();
            }
            node = node.next[curCode - aCode];
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const aCode = 'a'.charCodeAt(0);
            const curCode = word[i].charCodeAt(0);
            node = node.next[curCode - aCode];
            if (!node) return false;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const aCode = 'a'.charCodeAt(0);
            const curCode = prefix[i].charCodeAt(0);
            node = node.next[curCode - aCode];
            if (!node) return false;
        }
        return true;
    }
}
