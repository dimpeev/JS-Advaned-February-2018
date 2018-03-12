class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(other) {
        if(Object.getPrototypeOf(other) === Object.getPrototypeOf(this)) {
            this.unitedRats.push(other);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = [];
        result.push(this.name);
        for (let rat of this.unitedRats) {
            result.push("##" + rat.name);
        }
        return result.join("\n");
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho
console.log(test.getRats()); //[]
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
console.log(test.toString());
