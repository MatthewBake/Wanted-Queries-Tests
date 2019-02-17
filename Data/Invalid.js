module.exports = (Invalid, EnterPage) => {
    Invalid
                
                .click('@enterScreen')
                .editFields(EnterPage)
                .click('@savBtn')
                Invalid.expect.element('@eList').text.to.not.equal('')         
} 