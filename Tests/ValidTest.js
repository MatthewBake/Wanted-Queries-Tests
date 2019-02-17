var WantedPage = {}
let Valid = require('../Data/Valid')
let ValidCan = require('../Data/ValidCan')
let ValidMod = require('../Data/ValidMod')
let Info = require('../Data/cleardata')

module.exports = {
    beforeEach: browser => {
        WantedPage = browser.page.WantedPage()
        WantedPage.navigate()
            .waitForElementPresent('.titleBar')
    },
    after: browser => {
        browser.end()
    },
'QO2MB-59: Enter Screen Valid Entries:Required Fields': browser => {
// Enter Valid entries into the required fields, based on the requirements in the "Requirement Document"
// Click on submit
// Test Postconditions:
// Text message should appear with entered information. Each item should be separated with a comma. Comma should appears for each option field.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
Valid(WantedPage, test)
})
'QO2MB-65: Modify Screen: Valid Entry'
// Enter Valid entries into the required fields, based on the requirements in the "Requirement Document"
// Click on submit
// Test Postconditions:
// Text message should appear with entered information. Each item should be separated with a comma. Comma should appears for each option field.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
ValidMod(WantedPage, test)
})
'QO2MB-68: Cancel Screen: Valid Entry'
// Enter Valid entries into the required fields, based on the requirements in the "Requirement Document"
// Click on submit
// Test Postconditions:
// Text message should appear with entered information. Each item should be separated with a comma.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
ValidCan(WantedPage, test)
})
}
}