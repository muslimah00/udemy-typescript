"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // Use "as T" to tell TypeScript "trust me, these are T"
                const left = this.collection[j];
                const right = this.collection[j + 1];
                if (left > right) {
                    this.collection[j] = right;
                    this.collection[j + 1] = left;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
const sorter2 = new Sorter(['a', 'v', 'b', 'c']);
sorter.sort();
sorter2.sort();
console.log(sorter.collection);
console.log(sorter2.collection);
//# sourceMappingURL=index.js.map