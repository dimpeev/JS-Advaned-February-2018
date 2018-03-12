class Stringer {
    constructor(str, len) {
        this.innerString  = str;
        this.innerLength = len;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        this.innerLength -= len;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + "...";
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
