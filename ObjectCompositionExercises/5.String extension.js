(function () {
    Array.prototype.sumCharacters = function () {
        let sum = 0;
        for (let element of this) {
            sum += element.length;
        }
        return sum;
    };
    String.prototype.ensureStart = function (str) {
        let startStr = this.toString();
        if (!startStr.startsWith(str)) {
            return str + startStr;
        }
        return startStr;
    };
    String.prototype.ensureEnd = function (str) {
        let startStr = this.toString();
        if (!startStr.endsWith(str)) {
            return startStr + str;
        }
        return startStr;
    };
    String.prototype.isEmpty = function () {
        if (this.toString() === "") {
            return true;
        }
        ;
        return false;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        let str = this.toString();
        if (str.length <= n) {
            return str;
        }
        let strTokens = str.split(" ");
        if (strTokens.length === 1) {
            return str.substring(0, str.length - n - 3) + "...";
        }
        let result = [];
        for (let i = 0; i < strTokens.length; i++) {
            let sumOfCharacters = result.sumCharacters() + strTokens[i].length + result.length;
            if (sumOfCharacters > (n - 3)) {
                break;
            }

            result.push(strTokens[i]);
        }
        return result.join(" ") + "...";
    };
    String.format = function () {
        let args = Array.from(arguments);
        let str = args.shift();
        let params = args;
        const regex = /\{([0-9]+)\}/g;
        let match;
        while ((match = regex.exec(str)) !== null) {
            let index = Number(match[1]);
            if (params.length >= (index + 1)) {
                str = str.replace(match[0], params[index]);
            }
        }
        return str;
    };
}());


let str = "the quick brown fox jumps over the lazy dog";
console.log(str = str.truncate(10));
str = "the quick brown fox jumps over the lazy dog";
console.log(str = str.truncate(25));
str = "the quick brown fox jumps over the lazy dog";
console.log(str = str.truncate(43));
str = "the quick brown fox jumps over the lazy dog";
console.log(str = str.truncate(45));

str = "my string";
console.log(str = str.ensureStart("my"));
console.log(str = str.ensureStart("hello "));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format("The {0} {1} fox", "quick", "brown"));
console.log(str = String.format("jumps {0} {1}", "dog"));
