import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://nn.hh.ru/')

await page.setViewport({ width: 1920, height: 1061 })

await page.waitForSelector('.bloko-columns-wrapper > .bloko-column > .supernova-navi > .supernova-navi-item:nth-child(2) > .supernova-link')
await page.click('.bloko-columns-wrapper > .bloko-column > .supernova-navi > .supernova-navi-item:nth-child(2) > .supernova-link')

await navigationPromise

await page.waitForSelector('.applicant-resumes-recommendations > .applicant-resumes-recommendations-buttons > div > .applicant-resumes-recommendations-button > .bloko-button')
await page.click('.applicant-resumes-recommendations > .applicant-resumes-recommendations-buttons > div > .applicant-resumes-recommendations-button > .bloko-button')

//await browser.close()
