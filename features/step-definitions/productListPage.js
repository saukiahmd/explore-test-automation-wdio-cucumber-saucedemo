import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import productListPage from '../pageobjects/productListPage.page.js';

const pages = {
    plp: productListPage
}

Then('I should see a list of products displayed', async () => {
    await pages.plp.verificationPLP()
});

When(/I sort products by "([^"]*)"/, async (sortOption) => {
    await pages.plp.sortOptions(sortOption);
});

Then(/I should see products sorted from Z to A/, async () => {
    await pages.plp.verificationSortingNameZToA();
});

Then(/I should see products sorted from A to Z/, async () => {
    await pages.plp.verificationSortingNameAToZ();
});

Then(/I should see products sorted from high to low price/, async () => {
    await pages.plp.verificationSortingPriceHighToLow();
})

Then(/I should see products sorted from low to high price/, async () => {
    await pages.plp.verificationSortingPriceLowToHigh();
});