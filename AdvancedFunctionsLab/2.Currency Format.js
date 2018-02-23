function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result(func) {
    return function(value){
        return func(",", "$", true, value)
    }
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(152.453));
console.log(dollarFormatter(15262.2443636));
console.log(dollarFormatter(10));

