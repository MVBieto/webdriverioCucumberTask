import { Given, When, Then } from '@wdio/cucumber-framework';
import 'expect-webdriverio'
import { browser } from '@wdio/globals'


Given(/^user opens homepage$/, async () => {
	await browser.url('https://nordpass.com/')

When(/^user clicks plans$/, () => {
    let businessPlans = $('href="/plans/business/"')
	await browser.elementClick($('href="/plans/business/"'))
});

Then(/^plans are displayed$/, () => {
	return true;
});

Then(/^Free price contains 0 euros$/, () => {
	return true;
});

Then(/^standard price contains xx euros$/, () => {
	return true;
});

Then(/^premium price contains xxx euros$/, () => {
	return true;
});
