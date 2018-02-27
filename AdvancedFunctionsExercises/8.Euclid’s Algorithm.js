function findCommonDivisor(a, b) {
    let temp;
    while(b !== 0){
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(findCommonDivisor(252, 105));