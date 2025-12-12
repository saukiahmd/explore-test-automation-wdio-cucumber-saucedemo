import { $ } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class sidebarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnBurger () {
        return $('#react-burger-menu-btn');
    }

    async openSidebar () {
        await super.elementShouldDisplayed(this.btnBurger);
        await this.btnBurger.click();
    }
}

export default new sidebarPage();
