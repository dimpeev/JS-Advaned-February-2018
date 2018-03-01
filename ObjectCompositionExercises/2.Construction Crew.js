function result(worker) {
    if (worker.handsShaking) {
        worker.handsShaking = false;
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1;
    }
    return worker;
}

console.log(result({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(result({
        weight: 120,
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
));

console.log(result({
        weight: 95,
        experience: 3,
        bloodAlcoholLevel: 0,
        handsShaking: false
    }
));
