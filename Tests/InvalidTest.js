var WantedPage = {}
let Invalid = require('../Data/Invalid')
let InvalidCan = require('../Data/InvalidCan')
let InvalidMod = require('../Data/InvalidMod')
let Info = require('../Data/Invaliddata')

module.exports = {
    beforeEach: browser => {
        WantedPage = browser.page.WantedPage()
        WantedPage.navigate()
            .waitForElementPresent('.titleBar')
    },
    after: browser => {
        browser.end()
    },
'QO2MB-72: Cancel Screen: Invalid Entry': browser => {
// Enter invalid information, or no information into the required fields
// Enter invalid information or no information into the optional field, with invalid information in the option fields.
// Click the "Submit" button.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
Invalid(WantedPage, test)
})
'QO2MB-71: Modify Screen: Invalid Entry'
// Enter invalid information, or no information into the required fields
// Enter invalid information or no information into the optional field, with invalid information in the option fields.
// Click the "Submit" button.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
InvalidMod(WantedPage, test)
})
'QO2MB-68: Cancel Screen: Valid Entry'
// Enter invalid information, or no information into the required fields
// Enter invalid information or no information into the optional field, with invalid information in the option fields.
// Click the "Submit" button.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
InvalidCan(WantedPage, test)
})
}
}