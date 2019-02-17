module.exports = (Invalid, EnterPage) => {
    Invalid
                
                .click('@modifyScreen')
                .editFields(EnterPage)
                .click('@savBtn')
                Invalid.expect.element('@eList').text.to.not.equal('')         
} 