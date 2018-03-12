class SortedList {
    constructor() {
        this.list = [];
        this.sortFcn = (a, b) => a - b;
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort(this.sortFcn);
        this.size = this.list.length;
    }

    remove(index) {
        if (this.size > index && index >= 0) {
            this.list.splice(index, 1);
            this.list.sort(this.sortFcn);
            this.size = this.list.length;
        }
    }

    get(index) {
        if (this.size > index && index >= 0) {
            return this.list[index];
        }
    }

    size() {
        return this.size;
    }
}

let list = new SortedList();