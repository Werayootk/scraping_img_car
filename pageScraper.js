

const scraperObject = {
    url: 'https://search.drivehub.co/?booking_begin=2022-01-27%2010%3A00&booking_end=2022-01-29%2010%3A00&dealers=&from=from_homepage&location_id=205&sort_by=price',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url, { waitUntil: 'networkidle0' });

        //Logic
        // Click all detail and keep link picture and Brand car 
        // N Scrolldown and wait network idle
        // Do again
    }
}

module.exports = scraperObject;