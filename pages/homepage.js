const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.ryanair.com/pt/pt');
        await this.page.waitForLoadState('load');
    }



    async getTitle() {
        const expectedTittle = await this.page.title();
        expect(expectedTittle).toBe('Website Oficial da Ryanair | Voos Baratos')

    }
    async simConcordo() {
        const button = await this.page.waitForSelector('text="Sim, concordo"');
        await button.click();
    }
    async naoObrigada() {
        const button = await this.page.waitForSelector('text="Não, obrigado"');
        await button.click();
    }
    async verDefinicaoCookies() {
        const button = await this.page.waitForSelector('text="Ver definição de cookies"');
        await button.click();
    }
    async return() {
        const radioButton = await this.page.waitForSelector('ry-radio-button[data-ref="flight-search-trip-type__return-trip"]');
        radioButton.click()
    }
    async oneWay() {
        const radioButton = await this.page.waitForSelector('ry-radio-button[data-ref="flight-search-trip-type__one-way-trip"]');
        radioButton.click();
    }
    async departure() {
        const departureInput = this.page.locator('input[placeholder="Partida"]');
        await departureInput.fill('Londres');
    }
    async selectAirportDeparture() {
        const airportName = 'Londres Stansted'
        const airportItem = this.page.locator(`fsw-airport-item >> text=${airportName}`);
        await airportItem.waitFor({ state: 'visible' });
        await airportItem.click();
    }
    async destination() {
        const departureInput = this.page.locator('input[placeholder="Destino"]');
        await departureInput.fill('Dublin');
    }
    async selectAirportDestination() {
        const airportName = 'Dublin'
        const airportItem = this.page.locator(`fsw-airport-item >> text=${airportName}`);
        await airportItem.waitFor({ state: 'visible' });
        await airportItem.click();
    }
    async termosDeUso() {
        const checkbox = await this.page.locator('ry-checkbox[data-ref="terms-of-use__terms-checkbox"]');
        await checkbox.click();
        const verifyCheckbox = await this.page.locator('._background');
        expect(verifyCheckbox).toHaveClass(/_background--checked/, { timeout: 10000 });;

    }
}

module.exports = { HomePage };
