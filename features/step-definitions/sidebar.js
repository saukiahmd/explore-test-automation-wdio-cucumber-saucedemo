import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import sidebarPage from '../pageobjects/sidebar.page.js';

const pages = {
    sidebar: sidebarPage
}

When("user membuka menu sidebar", async () => {
    await pages.sidebar.openSidebar()
});