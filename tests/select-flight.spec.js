import { test } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.simConcordo();
});

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.getTitle();
});

test('select flight and dates', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.departure();
  await homePage.selectAirportDeparture();
  await homePage.destination();
  await homePage.selectAirportDestination();
  await homePage.oneWay();
  await homePage.termosDeUso();
})


