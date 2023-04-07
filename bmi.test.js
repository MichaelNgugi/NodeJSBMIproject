const {calculateBMI, bmiStatus} = require('./calculations');
const puppeteer = require("expect-puppeteer");

test ('50Kg, 1m bmi=50', () => {
    expect(calculateBMI(50, 1)).toBe(50);
});

test ('bmi=50 status=normal', () => {
    expect(bmiStatus(50)).toBe("Normal weight");
});

describe ('testing with puppeteer' , () =>{
    beforeAll(async () => {
        //const browser = await puppeteer.launch({ headless: true });
        //const page = await browser.newPage();
        await page.goto("/", { waitUntil: 'load' });
    });

    it('should display analysis page', async () => {
        const analysisBtn = await page.$('#all_data');
        await analysisBtn.click();
            
        await page.waitForTimeout(2000);

        const pageTitle = await page.title();

        //assert(pageTitle == 'BMI Reports');
        expect(pageTitle).toEqual("BMI Reports");

        await browser.close();
    });
});