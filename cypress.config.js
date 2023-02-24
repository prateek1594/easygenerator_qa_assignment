const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        BLINKING_TEXT: 'Free Access to InterviewQues/ResumeAssistance/Material',
        COUNTRY_TEXT: 'United Arab Emirates',
        TEST_USER: 'TestUser01',
    },
    browsers: [
        {
            name: 'chrome',
            family: 'chromium',
            channel: 'stable',
            displayName: 'Chrome',
            version: '106.0.5249.103',
            path: 'google-chrome',
            minSupportedVersion: 64,
            majorVersion: '106',
        },
    ],
    redirectionLimit: 20,
    defaultCommandTimeout: 10000,
    retries: {
        runMode: 0,
        openMode: 0,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on)
        },
        baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/',
    },
})
