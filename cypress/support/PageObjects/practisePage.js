class practisePage {
    // All the elements related to the practise page

    getPractisePage() {
        return cy.visit('/')
    }

    getBlinkingText() {
        return cy.get('.blinkingText')
    }

    getHomeButton() {
        return cy.get('a > .btn')
    }

    goBack() {
        return cy.go('back')
    }

    getPracticeButton() {
        return cy.get("button[class = 'btn btn-primary']")
    }

    getRadioButton() {
        return cy.get('input[class = "radioButton"]')
    }

    getAutoCompleteButton() {
        return cy.get('#autocomplete')
    }

    getSuggestionBox() {
        return cy.get('.ui-menu-item-wrapper')
    }

    getLegendChart() {
        return cy.get('legend')
    }

    getCheckBoxButton() {
        return cy.get('input[type = "checkbox"]')
    }

    getCheckBoxOptionOne() {
        return cy.get('#checkBoxOption1')
    }

    getDropdown() {
        return cy.get('#dropdown-class-example')
    }

    getOpenWindow() {
        return cy.get('#openwindow')
    }

    getOpenTab() {
        return cy.get('#opentab')
    }

    getNameBox() {
        return cy.get('input[name = "enter-name"]')
    }

    getNamePlaceholder() {
        return cy.get('input[placeholder = "Enter Your Name"]')
    }

    getAlertButton() {
        return cy.get('#alertbtn')
    }

    getConfirm() {
        return cy.get('input[value = "Confirm"]')
    }

    getSecondChildInTable() {
        return cy.get('tr td:nth-child(2)')
    }

    getDisplayedText() {
        return cy.get('#displayed-text')
    }

    getHideButton() {
        return cy.get('input[value = "Hide"]')
    }

    getShowButton() {
        return cy.get('input[value = "Show"]')
    }

    getMouseHoverContent() {
        return cy.get('.mouse-hover-content')
    }

    loadFrames() {
        return cy.frameLoaded('#courses-iframe')
    }

    frameMentorshipLink() {
        return cy.iframe().find("a[href = 'mentorship']")
    }

    frameInnerBox() {
        return cy.iframe().find('.inner-box')
    }

    framePricingTitle() {
        return cy.iframe().find('.pricing-title')
    }
}

export default practisePage
