import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: false,
  userDataDir: "./UserData"
});
const page = await browser.newPage()
await page.goto('https://nn.hh.ru/', {waitUntil: 'networkidle2'})
await page.setViewport({ width: 1920, height: 1061 })

const selectorMyResumesLink = '.bloko-columns-wrapper > .bloko-column > .supernova-navi > .supernova-navi-item:nth-child(2) > .supernova-link';
await page.waitForSelector(selectorMyResumesLink)
await page.click(selectorMyResumesLink)

// Try to find the button "Поднять в поиске"
const [raiseUpResumeButton] = await page.$x("//button[contains(., 'Поднять в поиске')]");
if (raiseUpResumeButton) {
  await raiseUpResumeButton.click();
}

await browser.close()
