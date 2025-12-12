import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LogoutPage from '../pageobjects/logout.page.js';
import loginPage from '../pageobjects/login.page.js';

const pages = {
    logout: LogoutPage,
    login: loginPage
}

Then("memilih menu Logout", async () => {
    await pages.logout.clickLogout();
});

Then("user berhasil melakukan logout", async () => {
    await pages.login.verifyLogin();
});