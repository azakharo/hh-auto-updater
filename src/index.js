import puppeteer from 'puppeteer';

const updateHhRu = async (page) => {
  await page.goto('https://nn.hh.ru/', {waitUntil: 'networkidle2'})

  const selectorMyResumesLink = '.bloko-columns-wrapper > .bloko-column > .supernova-navi > .supernova-navi-item:nth-child(2) > .supernova-link';
  await page.waitForSelector(selectorMyResumesLink)
  await page.click(selectorMyResumesLink)

  const [raiseUpResumeButton] = await page.$x("//button[contains(., 'Поднять в поиске')]");
  if (raiseUpResumeButton) {
    await raiseUpResumeButton.click();
  }
};

const updateSuperjob = async (page) => {
  await page.goto('https://superjob.ru');

  const [raiseUpResumeButton] = await page.$x("//span[contains(., 'Поднять в поиске')]");
  if (raiseUpResumeButton) {
    await raiseUpResumeButton.click();
  }
};

const browser = await puppeteer.launch({
  headless: false,
  userDataDir: "./UserData"
});
const page = await browser.newPage()
await page.setViewport({ width: 1920, height: 1061 })

await updateHhRu(page);
await updateSuperjob(page);

await browser.close()
