require('chromedriver');
const { Given, setDefaultTimeout, BeforeAll, AfterAll } = require('cucumber');
const { Builder, By} = require('selenium-webdriver');

let driver;

setDefaultTimeout(120000);

BeforeAll(async () => {
  try {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.manage().window().maximize();
    await this.driver.get('http://codeception.herokuapp.com');
    driver = this.driver;
  } catch (e) {
    console.error(`Unable to open Codeception:\n${e}`);
  }
});

Given(/^I signup with (.*), (.*) and (.*)$/, async function (username, email, password) {
  console.log('going inside');
  await driver.findElement(By.linkText("Login2")).click();
  await driver.sleep(5000);

});

AfterAll(async () => {
  try {
    await driver.quit();
  } catch (e) {
    console.error(`Unable to quit driver:\n${e}`);
  }
});