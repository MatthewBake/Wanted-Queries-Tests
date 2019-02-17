module.exports = (ClrBtn, CancelPage) => {
    ClrBtn
                ClrBtn.click('@cancelScreen')
                .editFields(CancelPage)
                .click('@ClrBtn')
               ClrBtn.expect.element("@WarID").value.equals("")
               ClrBtn.expect.element("@CanRes").value.equals("")
               ClrBtn.expect.element("@CanDat").value.equals("")
}