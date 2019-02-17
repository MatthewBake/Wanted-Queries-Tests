module.exports = (Valid, EnterPage) => {
    Valid
                
                .click('@modifyScreen')
                .editFields(EnterPage)
                .click('@savBtn')
                Valid.expect.element('@qBody').text.to.equal('1111111111.123456789.AA.123456789.Siruis Black.M.W.600.150.Brown.Murder.2001-01-01.123456789.UT.2019-02-16.12345.UT.2019-02-16')

}