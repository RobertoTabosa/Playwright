import { expect, Locator, Page } from '@playwright/test';

export default class MenuPage {
    constructor(page) {
        this.page = page;
        this.header = this.page.getByRole('navigation',{name:'Header'});
        this.dinnersLink = this.header.getByRole('link', { name: 'Dinners', exact: true });
        this.mealsLink = this.header.getByRole('link', { name: 'Meals', exact: true });
        this.ingredientsLink = this.header.getByRole('link', { name: 'Ingredients' });
        this.occasionsLink = this.header.getByRole('link', { name: 'Occasions' });
        this.cuisinesLink = this.header.getByRole('link', { name: 'Cuisines' });
        this.kitchentipsLink = this.header.getByRole('link', { name: 'Kitchen Tips' });
        this.newsLink = this.header.getByRole('link', { name: 'News' });
        this.featuresLink = this.header.getByRole('link', { name: 'Features' });
        this.AboutusLink = this.header.getByRole('link', { name: 'About Us' });

    };
    async hoverDinners() {
        await this.dinnersLink.hover();
        await expect(this.dinnersLink.first()).toBeVisible();
        //await expect(this.page.getByRole('navigation',{name:'Header'}).getByRole('link', { name: 'Dinners', exact: true }).last()).toBeVisible();
    };
    async hoverMeals() {
        await this.mealsLink.hover();
        await expect(this.mealsLink.first()).toBeVisible();
    };
    async hoverIngredients() {
        await this.ingredientsLink.hover();
        await expect(this.ingredientsLink.first()).toBeVisible();
    };
    async hoverOccasions() {
        await this.occasionsLink.hover();
        await expect(this.occasionsLink.first()).toBeVisible();
    };
    async hoverCusines(){
        await this.cuisinesLink.hover();
        await expect(this.cuisinesLink.first()).toBeVisible();
    };
    async hoverKitchentips(){
        await this.kitchentipsLink.hover();
        await expect(this.kitchentipsLink.first()).toBeVisible();
    };
    async hoverNews(){
        await this.newsLink.hover();
        await expect(this.newsLink.first()).toBeVisible();
    };
    async hoverFeatures(){
        await this.featuresLink.hover();
        await expect(this.featuresLink.first()).toBeVisible();
    };
    async hoverAboutus(){
        await this.AboutusLink.hover();
        await expect(this.AboutusLink.first()).toBeVisible();
    }
}