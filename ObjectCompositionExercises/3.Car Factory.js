function result(carRequirements) {
    let engines = {
        90: 1800,
        120: 2400,
        200: 3500
    };

    let power = Object.getOwnPropertyNames(engines).filter(power => Number(power) >= carRequirements.power).sort((a, b) => {
        if (Number(a) < Number(b)) {
            return -1;
        }
        return 1;
    })[0];
    let wheelSize = carRequirements.wheelsize % 2 === 0 ? carRequirements.wheelsize - 1 : carRequirements.wheelsize;

    let result = {};
    result.model = carRequirements.model;
    result.engine = {
        power: Number(power),
        volume: engines[power]
    };
    result.carriage = {
        type: carRequirements.carriage,
        color: carRequirements.color
    };
    result.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return result;
}

console.log(result({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14
}));