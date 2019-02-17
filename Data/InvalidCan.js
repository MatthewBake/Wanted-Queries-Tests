module.exports = (Invalid, EnterPage) => {
    Invalid
                
                .click('@cancelScreen')
                .editFields(EnterPage)
                .click('@savBtn')
                Invalid.expect.element('@eList').text.to.not.equal('')         
} 