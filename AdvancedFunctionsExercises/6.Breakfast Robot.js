function solution() {
    const successMessage = "Success";
    const errorMessage = (ingredient) => {
        return `Error: not enough ${ingredient} in stock`;
    };
    const reportMessage = (protein, carbohydrate, fat, flavour) => {
        return `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`;
    };
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    const commands = {
        restock: (ingredient, quantity) => {
            ingredients[ingredient] += quantity;
            return successMessage;
        },
        prepare: (recipe, quantity) => {
            for (let ingredient in recipes[recipe]) {
                let neededQuantity = recipes[recipe][ingredient] * quantity;
                if(ingredients[ingredient] < neededQuantity) {
                    return errorMessage(ingredient);
                }
            }
            for (let ingredient in recipes[recipe]) {
                let neededQuantity = recipes[recipe][ingredient] * quantity;
                ingredients[ingredient] -= neededQuantity;
            }
            return successMessage;
        },
        report: () => {
            return reportMessage(ingredients.protein, ingredients.carbohydrate, ingredients.fat, ingredients.flavour);
        }
    };

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function manage(params) {
        [cmd, ingredient, quantity] = params.split(" ");
        return commands[cmd](ingredient, Number(quantity))
    }

    return manage;
}

let manager = solution();

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
