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
Feature: Login functionality on SauceDemo

  Background: 
    Given I am on the SauceDemo login page

  @positive
  Scenario Outline: Successful login with standard user
    When I login using username "<username>" and password "<password>"
    Then I should be redirected to the products page

    Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |

🧩 Contoh Step Definition
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

⚙️ Instalasi
Pastikan Node.js v18+ sudah terpasang.

npm install

▶️ Menjalankan Automation
Menjalankan semua test : npx wdio run wdio.conf.js

Menjalankan 1 feature : npx wdio run wdio.conf.js --spec ./features/login/login.feature


📊 Allure Report Preview

Tambahkan screenshot kamu di sini:

<p align="center">
  <img src="https://github.com/USERNAME/REPO/blob/main/assets/allure-preview.png" width="600"/>
</p>

▶️ Cara Generate Allure Report
npx allure generate allure-results --clean
npx allure open

🎥 Demo Video

Video automation bisa diupload ke GitHub Releases agar tampilan README lebih profesional.

Contoh penempatan video:

(Ganti USERNAME dan REPO setelah kamu upload video)

