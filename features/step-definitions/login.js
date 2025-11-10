import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}

Given('I am on the SauceDemo login page', async () => {
    await pages.login.open()
});

When(/I login using username "([^"]*)" and password "([^"]*)"/, async (username, password) => {
    await pages.login.login(username, password)
});

Then('I should be redirected to the products page', async () => {
    await pages.login.verifySuccessLogin();
});

Then(/I should see an error message "([^"]*)"/, async (errorMessage) => {
    switch (errorMessage) {
        case 'Epic sadface: Sorry, this user has been locked out.':
            await pages.login.verifyErrorLockedOutUser();
            break;

        case 'Epic sadface: Username and password do not match any user in this service':
            await pages.login.verifyErrorInvalidUser();
            break;

        default:
            console.log('Pesan error tidak dikenali:', errorMessage);
    }
});

