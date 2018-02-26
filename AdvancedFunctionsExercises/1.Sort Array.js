function sortArray(arr, method) {
    let sortingStrategy = {
        asc : (a, b) => a - b,
        desc : (a, b) => b - a
    };
    return arr.sort(sortingStrategy[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
