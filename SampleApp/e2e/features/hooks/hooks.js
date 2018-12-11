/* eslint-disable node/no-unpublished-require, objects/no-object-properties-first-line, objects/no-object-properties-one-line, objects/no-object-properties-last-line */
const {BeforeAll, Before, AfterAll, After} = require('cucumber');
const detox = require('detox');

const detoxConfigs = require('../../../package').detox;
/* eslint-enable node/no-unpublished-require */

/* eslint new-cap: off, no-undef: off */
BeforeAll({timeout: 300 * 1000}, async () => {
    let detoxConfig;

    const isAndroid = process.argv[process.argv.length - 1].includes('android');

    if (isAndroid) {
        detoxConfig = detoxConfigs.androidConfig;
        global.PLATFORM = 'android';
    } else {
        detoxConfig = detoxConfigs.iosConfig;
        global.PLATFORM = 'ios';
    }

    try {
        await detox.init(detoxConfig);
    } catch (error) {
        console.log(error);
    }
});

AfterAll(async () => {
    await detox.cleanup();
});
