module.exports = (clrButton, EnterPage) => {
    clrButton
                
                .click('@enterScreen')
                .editFields(EnterPage)
                .click('@ClrBtn')
                clrButton.expect.element("@Header").value.equals("")
                clrButton.expect.element("@MKE").value.equals("")
                clrButton.expect.element("@ORI").value.equals("")
                clrButton.expect.element("@Name").value.equals("")
                clrButton.expect.element("@Sex").value.equals("")
                clrButton.expect.element("@Race").value.equals("")
                clrButton.expect.element("@Height").value.equals("")
                clrButton.expect.element("@Weight").value.equals("")
                clrButton.expect.element("@DLN").value.equals("")
                clrButton.expect.element("@DLS").value.equals("")
                clrButton.expect.element("@DLEx").value.equals("")
                clrButton.expect.element("@Plate").value.equals("")
                clrButton.expect.element("@PlateSt").value.equals("")
                clrButton.expect.element("@PlateEx").value.equals("")
}