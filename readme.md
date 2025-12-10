<p align="center">✨ QA Automation – Web Testing with WebdriverIO, Cucumber, SauceDemo & Allure Report ✨</p>
<p align="center"> <img src="https://img.shields.io/badge/WebdriverIO-v8-red" /> <img src="https://img.shields.io/badge/Cucumber-BDD-green" /> <img src="https://img.shields.io/badge/Node.js-18+-yellow" /> <img src="https://img.shields.io/badge/SauceDemo-Automation-blue" /> <img src="https://img.shields.io/badge/Allure-Report-purple" /> </p>

---

🎯 Project Goals

Project ini dibuat untuk menunjukkan kemampuan saya dalam:

🚀 Merancang test automation yang scalable menggunakan WebdriverIO

🍀 Menulis scenario BDD yang jelas menggunakan Cucumber (Gherkin)

🧱 Mengimplementasikan Page Object Model (POM) agar mudah dirawat

🧪 Menggunakan assertion, hooks, dan reusable functions

🛒 Melakukan automasi end-to-end pada website SauceDemo

---

🧩 Teknologi yang Digunakan

| Tools | Fungsi |
|-------|--------|
| **WebdriverIO** | Test runner modern berbasis Node.js |
| **Cucumber (Gherkin)** | Behavior-Driven Development |
| **SauceDemo** | Website target automation |
| **Node.js** | JavaScript runtime |
| **Page Object Model** | Arsitektur test yang rapi & terstruktur |

---

🧪 Contoh Feature (Gherkin)

```gherkin
Feature: Login functionality on SauceDemo 1

  Background:
    Given I am on the SauceDemo login page

  @positive
  Scenario Outline: Successful login with standard user
    When I login using username "<username>" and password "<password>"
    Then I should be redirected to the products page

    Examples:
      |  username      |  password      |
      |  standard_user |  secret_sauce  |
```

---

🧩 Contoh Step Definition

```gherkin
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}
When(/I login using username "([^"]*)" and password "([^"]*)"/, async (username, password) => {
    await pages.login.login(username, password)
});

Then('I should be redirected to the products page', async () => {
    await pages.login.verifySuccessLogin();
});
```
---

⚙️ Instalasi

Pastikan Node.js v18+ sudah terpasang.

```bash
npm install
```

---

▶️ Menjalankan Automation

Menjalankan semua test 
```bash
npx wdio run wdio.conf.js
```

Menjalankan 1 feature 
```bash
npx wdio run wdio.conf.js --spec ./features/login/login.feature
```

---

📊 Allure Report Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/saukiahmd/explore-test-automation-wdio-cucumber-saucedemo/a37fb190771a7480183df5a667b0f2f5520f7ad0/html-result/10_12_2025.png" width="1000"/>
</p>

---

▶️ Cara Generate Allure Report
```bash
npx allure generate allure-results --clean
npx allure open
```
---

🎥 Demo Video

<p align="center">
  <a href="https://raw.githubusercontent.com/saukiahmd/explore-test-automation-wdio-cucumber-saucedemo/ffbb485776ebafd3993812a350a89b61b84dbfc0/html-result/running-automation.mp4">
    <img src="https://raw.githubusercontent.com/saukiahmd/explore-test-automation-wdio-cucumber-saucedemo/37fec221ce4f321204479989393702aff6226808/html-result/thumbnail.jpg" width="600"/>
  </a>
</p>


