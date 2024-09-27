const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function launchChrome() {
    // Setup the ChromeDriver
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

    // Open a website (optional, you can comment this out)
    await driver.get('https://www.google.com');

    // Wait for a few seconds
    await driver.sleep(5000);

    // Close the browser
    await driver.quit();
}

launchChrome();
