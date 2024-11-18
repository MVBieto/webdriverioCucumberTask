import { Given, When, Then } from '@wdio/cucumber-framework';
import 'expect-webdriverio'
import { $, browser } from '@wdio/globals'


When('the user waits {int} seconds', async (seconds) => {
	await browser.pause(seconds*1000)
})
