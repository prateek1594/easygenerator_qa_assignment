/// <reference types="cypress" />

import practisePage from '../support/PageObjects/practisePage'

describe('UI tests for Automation Practise Page', function () {
    beforeEach(function () {
        const practicePageVar = new practisePage()
        cy.log('Navigating to the automation practice page')
        practicePageVar.getPractisePage()
    })

    //This test is to validate the header of the Base Page
    it('Tests for basic operations such as checking headers, text', function () {
        const practicePageVar = new practisePage()

        //Using a Chai assertion here to make sure that the blinking Text is visible
        practicePageVar.getBlinkingText().should('be.visible')

        //Using a Chai assertion which makes sure that the required text is present
        practicePageVar
            .getBlinkingText()
            .should('have.text', Cypress.env('BLINKING_TEXT'))

        //Clicking the Home button, making sure that the link opens in the same browser and then navigating back
        practicePageVar.getHomeButton().contains('Home').click()
        cy.url().should('be.equal', 'https://www.rahulshettyacademy.com/')
        practicePageVar.goBack()

        //Clicking the Practice button and making sure that it is visible
        practicePageVar
            .getPracticeButton()
            .contains('Practice')
            .should('be.visible')

        //Clicking the Login button and making sure that it is visible
        practicePageVar
            .getPracticeButton()
            .contains('Login')
            .should('be.visible')

        //Clicking the Signup button and making sure that it is visible
        practicePageVar
            .getPracticeButton()
            .contains('Signup')
            .should('be.visible')
    })

    //This test is to test the radio button functionality
    it('Radio Button Example Functionality', function () {
        const practicePageVar = new practisePage()

        // Select all the titles from the page and then filter 'Radio Button Example' title out of all
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const radioButtonTitle = $el.text()

            if (radioButtonTitle.includes('Radio Button')) {
                cy.log('Got Radio Button Example title bar !!')
            }
        })
        // select radio1 option --> first
        // select radio2 option --> second (this will deselect first option)
        practicePageVar.getRadioButton().check(['radio1', 'radio2'])
    })

    //This test is to test the Dropdown functionality
    it('Test for Dropdown Functionality', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Suggestion Class Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            //The mistake here with 'Suggestion' being 'Suggession' is in the website
            if (suggestionClassTitle.includes('Suggession Class')) {
                cy.log('Got Suggestion Class Example title bar !!')
            }
        })

        //Clicking on the Autocomplete button and typing 'United' and then selecting the 'United Arab Emirates' option
        practicePageVar.getAutoCompleteButton().click().type('United')

        practicePageVar.getSuggestionBox().each(($el, index, $list) => {
            const countryText = $el.text()
            if (countryText.includes(Cypress.env('COUNTRY_TEXT'))) {
                $el.trigger('click')
            }
        })

        practicePageVar
            .getAutoCompleteButton()
            .should('have.value', Cypress.env('COUNTRY_TEXT'))
    })

    //This test is to test the Dropdown functionality with static dropdown options
    it('Test for Static Dropdown Functionality', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Dropdown Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Dropdown Example')) {
                cy.log('Got Dropdown Example title bar !!')
            }
        })

        //Select the dropdown example
        practicePageVar
            .getDropdown()
            .select('Option1')
            .should('have.value', 'option1')
    })

    //This test is to test the checkbox functionality
    it('Checkbox Functionality', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Checkbox Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Checkbox Example')) {
                cy.log('Got Checkbox Example title bar !!')
            }
        })

        //Clicking on the checkbox and validating that it is checked and also validating the value option
        practicePageVar
            .getCheckBoxOptionOne()
            .check()
            .should('be.checked')
            .and('have.checked', 'option1')

        //Un-checking the box and validating that it is unchecked
        practicePageVar
            .getCheckBoxOptionOne()
            .uncheck()
            .should('not.be.checked')

        //Selecting multiple checkboxes and selecting the ones which are needed out of them
        practicePageVar.getCheckBoxButton().check(['option2', 'option3'])
    })

    //This test is to test the buttons which navigate one to another window
    it('Switch Window Functionality', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Switch Window Example')) {
                cy.log('Found the Switch Window Example title bar')
            }
        })

        //Here we are clicking on the "Open Window" button which opens a tab in a new window.
        //So, we need to check if the button has the appropriate attribute and then open the link in the same tab
        //We cannot check the 'href' attribute here as this button is linked to a function which handles different scenario
        practicePageVar
            .getOpenWindow()
            .contains('Open Window')
            .invoke('attr', 'onclick')
            .should('contain', 'openWindow()')
    })

    //This test is to test Switch Tab functionality
    it('Switch Tab Functionality', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Switch Tab Example')) {
                cy.log('Got Switch Tab Example title bar !!')
            }
        })

        //Clicking on a link which redirects the operation to a child page
        //Here we are removing an attribute called target thus making the link open in the same parent window
        practicePageVar.getOpenTab().invoke('removeAttr', 'target').click()

        //Validating the URL fo the new page to which we travelled to
        cy.url().should('be.equal', 'https://www.rahulshettyacademy.com/')

        //We now need to navigate back to the web page.
        practicePageVar.goBack()
    })

    //This test is to test Alert functionality - Alert Button
    it('Test for Alert functionality', function () {
        const practicePageVar = new practisePage()
        const testUser = Cypress.env('TEST_USER')

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Switch To Alert Example')) {
                cy.log('Got Switch Tab Example title bar !!')
            }
        })

        //Checking that the text box where we enter the text for the alert exist.
        practicePageVar.getNameBox().should('have.attr', 'placeholder')

        //Checking the placeholder text is "Enter Your Name" exists
        practicePageVar.getNamePlaceholder().should('exist')

        //Entering the text in the Alert Box
        practicePageVar.getNamePlaceholder().type(testUser)

        //Clicking the 'Alert' button
        practicePageVar.getAlertButton().click()

        //Checking that the alert text is what it is supposed to be
        cy.on('window:alert', (alertString) => {
            //This is a Mocha assertion
            expect(alertString).to.equal(
                `Hello ${testUser}, share this practice page and share your knowledge`
            )
        })
    })

    //This test is to test Confirm Button popup
    it('Test for Confirm button popup', function () {
        const practicePageVar = new practisePage()
        const testUser = Cypress.env('TEST_USER')

        //Entering the text in the Alert Box
        practicePageVar.getNamePlaceholder().type(testUser)

        //Clicking the 'Alert' button
        practicePageVar.getConfirm().click()

        //Checking that the alert text is what it is supposed to be
        cy.on('window:confirm', (confirmString) => {
            //This is a Mocha assertion
            expect(confirmString).to.equal(
                `Hello ${testUser}, Are you sure you want to confirm?`
            )
        })
    })

    //This test is to check if Cypress can parse the Web Table
    it('Test for webtable handling', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Web Table Example Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Web Table Example')) {
                cy.log('Found the Web Table Example title bar')
            }
        })

        //Checking if the Course column containing 'Selenium Webdriver with Java Basics' has the Price value of '30'
        practicePageVar.getSecondChildInTable().each(($el, index, $list) => {
            //Declaring a constant called 'text'
            const text = $el.text()

            //Checking here for the Course column containing 'Selenium WebDriver with Java Basics'
            if (text.includes('Selenium Webdriver with Java Basics')) {
                //Here we are shifting to the next column using the '.next()' function
                practicePageVar
                    .getSecondChildInTable()
                    .eq(index)
                    .next()
                    .then(function (price) {
                        expect(price.text()).to.equal('30')
                    })
            }
        })
    })

    //This test is to check the Mouse Hover Functionality
    it('Test for Mouse Hover functionality ', function () {
        const practicePageVar = new practisePage()

        //We are selecting the many titles and filtering the 'Mouse Hover Example' title out of them
        practicePageVar.getLegendChart().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text()

            if (suggestionClassTitle.includes('Mouse Hover Example')) {
                cy.log('Got Mouse Hover Example title bar !!')
            }
        })

        //Here we cannot use Cypress commands to invoke mouse hover actions
        //So, we are using the DOM of the page to perform the hovering action
        practicePageVar.getMouseHoverContent().invoke('show')
        cy.contains('Top').click()

        //Verifying that clicking on the button has taken to the TOP of the page
        cy.url().should('include', 'top')

        //Here we are trying to invoke the reload option
        practicePageVar.getMouseHoverContent().invoke('show')
        cy.contains('Reload').click()

        //Verifying that clicking on the button has reloaded the page
        cy.url().should('not.contain', 'top')
    })

    // Tests for handling frames
    it('Test for frames', function () {
        const practicePageVar = new practisePage()

        cy.log('Handling frames here')

        //Here we have entered the iframe using the id
        practicePageVar.loadFrames()

        //To start working on the iframe, we need to use the 'cy.iframe()' command
        //To click on any command in the iframe, we need to use '.find()' and not '.get()'
        //Here, we clicked on one of the links in the header of the page
        practicePageVar.frameMentorshipLink().eq(0).click()

        //We are now verifying if clicking on the link has opened the particular box
        // wait for page to be fully loaded
        cy.wait(3000)
        practicePageVar.frameInnerBox().should('contain', 'Mentorship')

        //Finding if the number of packages are 2
        practicePageVar.framePricingTitle().should('have.length', 2)
    })
})
