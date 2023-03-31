const {calculateBMI, bmiStatus} = require('./index');

test ('50Kg, 1m bmi=50', () => {
    expect(calculateBMI(50, 1)).toBe(50);
});

test ('bmi=50 status=normal', () => {
    expect(bmiStatus(50)).toBe("Normal weight");
});