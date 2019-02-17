var WantedPage = {}
let clear = require('../Data/Clear')
let Info = require('../Data/cleardata')
let cler = require('../Data/Cler')
let clr = require('../Data/Clr')

module.exports = {
beforeEach: browser => {
    WantedPage = browser.page.WantedPage()
    WantedPage.navigate()
        .waitForElementPresent('.titleBar')
},
after: browser => {
    browser.end()
},
'QO2MB-77: Clear Button Test': browser => {
// Click on the pop-out menu and click on either Enter, Modify, or Cancel.
// Enter information into the fields on this page.
// Click on the "Clear" button
// Confirm that the entered information has been cleared from the fields
// Click on the pop-out button, click on another form that has not been tests (Enter, Modify, or Cancel.
// Repeat steps 2-4
// The information should have been cleared from all fields from all three screens.
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(test =>{
clear(WantedPage, test)
})
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(tests =>{
cler(WantedPage, tests)
})
WantedPage.click('@BurgerBtn')
WantedPage.pause(1000)
Info.forEach(tests =>{
clr(WantedPage, tests)
})

}
}