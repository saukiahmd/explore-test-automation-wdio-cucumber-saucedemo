import { $ } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get containerProducts () {
        return $('#inventory_container.inventory_container');
    }
    
    get errorMessage(){
        return $('h3[data-test="error"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async verifySuccessLogin() {
        await super.elementShouldDisplayed(this.containerProducts);
    }

    async verifyErrorLockedOutUser() {
        await super.elementShouldDisplayed(this.errorMessage);
        await expect(this.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }
    
    async verifyErrorInvalidUser() {
        await super.elementShouldDisplayed(this.errorMessage);
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

    async verifyErrorFieldRequired(errorMessage) {
        await super.elementShouldDisplayed(this.errorMessage);
        if (errorMessage === 'Epic sadface: Username is required') {
            await expect(this.errorMessage).toHaveText('Epic sadface: Username is required');
        } else if (errorMessage === 'Epic sadface: Password is required') {
            await expect(this.errorMessage).toHaveText('Epic sadface: Password is required');
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LoginPage();
