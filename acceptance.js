
    const puppeteer = require('puppeteer');
    const assert = require('assert');

    try {
        (async () => {
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.goto("/BMI", { waitUntil: 'load' });

            const analysisBtn = await page.$('#all_data');
            await analysisBtn.click();
            
            await page.waitForTimeout(2000);

            const pageTitle = await page.title();

            assert(pageTitle == 'BMI Reports');
            console.log("Title matched succesfully");

            await browser.close();
        })();
    } catch (err) {
        console.error(err);
    }

