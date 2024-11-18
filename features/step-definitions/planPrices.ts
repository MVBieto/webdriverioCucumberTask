import { Given, When, Then } from '@wdio/cucumber-framework';
import 'expect-webdriverio'
import { $, browser } from '@wdio/globals'


Given('user opens {string}', async (page) => {
	await browser.url(page)
})

When('user clicks plans', async () => {
    let businessPlans = await $('[href="/plans/business/"]')
	await businessPlans.click();
})

// Then(/^plans are displayed$/,async () => {
// 	return true;
// });

// Then(/^Free price contains 0 euros$/, async () => {
// 	return true;
// });

// Then(/^standard price contains xx euros$/, async () => {
// 	return true;
// });

// Then(/^premium price contains xxx euros$/, async () => {
// 	return true;
// });
