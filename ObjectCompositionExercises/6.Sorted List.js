function sortedList() {
    let obj = (() => {
        let list = [];
        let size = 0;
        let sortFcn = (a, b) => a - b;

        function add(element) {
            list.push(element);
            list.sort(sortFcn);
            this.size = list.length;
        }

        function remove(index) {
            if (this.size > index && index >= 0) {
                list.splice(index, 1);
                list.sort(sortFcn);
                this.size = list.length;
            }
        }

        function get(index) {
            if (this.size > index && index >= 0) {
                return list[index];
            }
        }

        return {add, remove, get, size};
    })();

    return obj;
}