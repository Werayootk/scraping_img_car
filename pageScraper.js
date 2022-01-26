

const scraperObject = {
    url: 'https://search.drivehub.co/?booking_begin=2022-01-28%2010%3A00&booking_end=2022-01-31%2010%3A00&from=from_homepage&location_id=3&sort_by=price',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url, { waitUntil: 'networkidle0' });
        await page.waitForSelector(".row.car-listing");
        //Logic
        // Click all detail and keep link picture and Brand car 
        // N Scrolldown and wait network idle
        // Do again
    }
}

module.exports = scraperObject;