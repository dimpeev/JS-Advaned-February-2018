function getFibonator() {
    let n1 = 0;
    let n2 = 1;
    return function() {
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        return n1;
    }
}

let fib = getFibonator();
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
fib(); // 8
fib(); // 13
