import { $ } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class logoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuLogout () {
        return $('#logout_sidebar_link');
    }

    async clickLogout () {
        await super.elementShouldDisplayed(this.menuLogout);
        await this.menuLogout.click();
    }

}

export default new logoutPage();
