import { expect, Locator, Page, testInfo} from '@playwright/test';
export default class Login {
    constructor(page) {
        this.page = page;
        this.login = this.page.getByRole('link', {name: 'Log In'});
        this.loginEmail = this.page.getByRole('button', { name: 'Log in with Email' });
        this.loginFaceb = this.page.getByRole('link', { name: 'Log in with Facebook' })
        this.loginGoogle = this.page.getByRole('link', { name: 'Log in with Google' })
    }

    async LoadPageLogin(){
        await this.login.click();
        await expect(this.page.getByText('Log in to save and review')).toBeVisible();
        await expect(this.page.getByText('Don\'t have an account? Join')).toBeVisible();
        await expect(this.loginEmail).toBeVisible();
        await expect(this.loginFaceb).toBeVisible();
        await expect(this.loginGoogle).toBeVisible();
    }

    async LoginEmailSuccess(user, password){
        await this.loginEmail.click();
        await this.page.getByPlaceholder('yourname@example.com').fill(user);
        await this.page.getByPlaceholder('yourname@example.com').press('Tab');
        await this.page.getByPlaceholder('Enter your password').fill(password);
        await this.page.getByRole('button', { name: 'Log in' }).click();
        expect (await this.page.getByRole('button', {name: 'My Account', exact:true})).toBeVisible;

    }
}
