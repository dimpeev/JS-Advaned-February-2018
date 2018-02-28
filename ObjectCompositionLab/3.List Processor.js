function listProcessor(cmdArgs) {
    let commandProcessor = (function() {
        let elements = [];
        return {
            add: (newItem) => elements.push(newItem),
            remove: (item) => elements = elements.filter((element) => element !== item),
            print: () => console.log(elements.join(","))
        };
    }());
    for (let cmdArg of cmdArgs) {
        let [cmd, item] = cmdArg.split(" ");
        commandProcessor[cmd](item);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);