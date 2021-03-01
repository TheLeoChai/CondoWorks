const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 800});
    await page.goto('https://app-dev.condoworks.co', { waitUntil: 'networkidle0' });
    await page.type('#Email', 'coop.test@condoworks.co');
    await page.type('#Password','MyTesting711');

    await page.click('#btnSubmit');
    await page.waitForSelector('#navbarNavDropdown > ul:nth-child(1) > li:nth-child(1) > a');

    await page.click('#navbarNavDropdown > ul:nth-child(1) > li:nth-child(1) > a');
    await page.click('#navbarNavDropdown > ul:nth-child(1) > li:nth-child(1) > div > a:nth-child(1)');
    await page.waitForSelector('[name="invoices.InvoiceNumber"]');
    await page.type('[name="invoices.InvoiceNumber"]', '123\n');
    await page.waitForSelector('[title="123444"]');

    var magGlass = await page.evaluate(()=>{
        return document.querySelector('[title="123444"]').parentElement.getAttribute('tabindex');
    });
    await page.click('tbody > [tabindex="' + magGlass + '"] > td:nth-child(1) > a');
    //await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: 'D:/downloads'});
    await page.waitForSelector('[title="Download file"]');
    await page.click('[title="Download file"]');
    await page.waitFor(2000000);
    await browser.close();

})();