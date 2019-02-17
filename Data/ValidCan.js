module.exports = (Valid, EnterPage) => {
    Valid
                
                .click('@cancelScreen')
                .editFields(EnterPage)
                .click('@savBtn')
                Valid.expect.element('@qBody').text.to.equal('1111111111.Mistake.2019-02-16')

}