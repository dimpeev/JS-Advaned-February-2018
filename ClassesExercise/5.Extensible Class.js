let Extensible = (() => {
        let counter = 0;
        return class Extensible {
            constructor() {
                this.id = counter++;
            }

            extend(template) {
                for (let property of Object.keys(template)) {
                    if (typeof(template[property]) == "function") {
                        Object.getPrototypeOf(this)[property] = template[property];
                    } else {
                        this[property] = template[property];
                    }
                }
            }
        };
    }
)();

let template = {
    extensionMethod: function () {return 0},
    extensionProperty: 'someString'
};

let obj1 = new Extensible();
let obj2 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);

obj1.extend(template);
console.log(obj1);
console.log(obj2);


