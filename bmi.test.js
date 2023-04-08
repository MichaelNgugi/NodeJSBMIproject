const {calculateBMI, bmiStatus} = require('./calculations');
const puppeteer = require("puppeteer");

test ('50Kg, 1m bmi=50', () => {
    expect(calculateBMI(50, 1)).toBe(50);
});

test ('bmi=50 status=normal', () => {
    expect(bmiStatus(50)).toBe("Normal weight");
});

/*
describe ('testing with puppeteer' , () =>{
    beforeAll(async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto("https://bmi-mike-app.onrender.com/", { waitUntil: 'load' });
        //await page.waitForTimeout(6000);
    });

    it('should display analysis page', async () => {
        // Wait for redirection
        await page.setDefaultNavigationTimeout(0);
        await page.goto("https://bmi-mike-app.onrender.com/", { timeout: 0 });
        await page.waitForNavigation({waitUntil: 'networkidle2', networkIdleTimeout: 5000});
        const analysisBtn = await page.$('#all_data');
        await analysisBtn.click();

        await page.waitForTimeout(4000);
        const pageTitle = await page.title();

        //assert(pageTitle == 'BMI Calculator');
        expect(pageTitle).toEqual('BMI Reports');

        await browser.close();
    }, 70000);
});
*/