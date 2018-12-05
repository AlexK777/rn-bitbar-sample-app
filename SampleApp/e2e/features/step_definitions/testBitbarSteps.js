/* eslint-disable node/no-unpublished-require */
const {Given, Then} = require('cucumber');
/* eslint-enable node/no-unpublished-require */

/* eslint new-cap: off, no-undef: off */
Given(/^I have launched the app$/, async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
});

Then(/^I should see some text$/, async () => {
    await expect(element(by.id('getStarted'))).toBeVisible();
});
