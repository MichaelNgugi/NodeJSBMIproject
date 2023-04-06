function calculateBMI(a, b) {
    var calc = a / (b * b);
    return calc;
}

function bmiStatus(value) {
    var stat;
    if (value < 18.5 ){
        stat = "Underweight";
    }else if(value >= 18.5) {
        stat = "Normal weight";
    }else if (value >= 25) {
        stat = "Overweight";
    }else if (value >= 30) {
        stat = "Obesity";
    }
    return stat;
}

module.exports = {calculateBMI, bmiStatus};