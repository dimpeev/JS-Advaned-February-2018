function personalInfo(name, age, weight, height) {
    let BMI = Math.round(weight /(height * height / 10000));
    let personalInfo = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: BMI,
        status: getStatus(BMI)
    };

    function getStatus(bmi) {
        console.log(bmi)
        if(bmi < 18.5) {
            return "underweight";
        }
        if(bmi < 25) {
            return "normal";
        }
        if(bmi < 30) {
            return "overweight";
        }
        return "obese";
    }

    if(personalInfo.status == "obese"){
        personalInfo.recommendation = "admission required";
    }

    return personalInfo;
}

console.log(personalInfo("Peter", 29, 75, 182));