function result() {
    let summary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let objValue = arguments[i];
        let objType = typeof(objValue);
        console.log(`${objType}: ${objValue}`);
        if(!summary.has(objType)) {
            summary.set(objType, 1);
            continue;
        }
        summary.set(objType, summary.get(objType) + 1);
    }
    Array.from(summary).sort((a, b) => b[1] - a[1]).forEach(element => console.log(`${element[0]} = ${element[1]}`));
}

result('cat', 42, function () { console.log('Hello world!'); }, 30);