function result(commands) {
    let objectManipulator = (function() {
        let objects = new Map();
        return {
            create: ([objectName, inherits = null, parentName = null]) => {
                if(parentName === null) {
                    let object = {};
                    objects.set(objectName, object);
                    return;
                }
                let parentObject = objects.get(parentName);
                let object = Object.create(parentObject);
                objects.set(objectName, object);
            },
            set: ([objectName, key, value]) => {
                objects.get(objectName)[key] = value;
            },
            print: ([objectName]) => {
                let object = objects.get(objectName);
                let result = [];
                for (let key in object) {
                    result.push(`${key}:${object[key]}`)
                }
                console.log(result.join(", "))
            }
        }
    }());
    for (let command of commands) {
        let cmdParameters = command.split(" ");
        let action = cmdParameters.shift();
        objectManipulator[action](cmdParameters);
    }
}

result(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);