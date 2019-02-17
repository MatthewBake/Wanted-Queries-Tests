var wantedCommands = {

editFields:  function(fieldInfo){
        if(fieldInfo.WarID){
        this
            .setValue('@WarID', fieldInfo.WarID)
        }
        if(fieldInfo.Header){
        this    
            .setValue('@Header', fieldInfo.Header)
        }
        if(fieldInfo.MKE){
        this
            .setValue('@MKE', fieldInfo.MKE)
        }
        if(fieldInfo.ORI){
        this
            .setValue('@ORI', fieldInfo.ORI) 
        }
        if(fieldInfo.Name){
            this
                .setValue('@Name', fieldInfo.Name)
        }        
        if(fieldInfo.Sex){
            this
                .setValue('@Sex', fieldInfo.Sex)
        }
        if(fieldInfo.Race){
            this
                .setValue('@Race', fieldInfo.Race)
        }
        if(fieldInfo.Height){
            this
                .setValue('@Height', fieldInfo.Height)
        }
        if(fieldInfo.Weight){
            this
                .setValue('@Weight', fieldInfo.Weight)
        }
        if(fieldInfo.Hair){
            this
                .setValue('@Hair', fieldInfo.Hair)
        }
        if(fieldInfo.Offense){
            this
                .setValue('@Offense', fieldInfo.Offense)
        }
        if(fieldInfo.WarDate){
            this
                .setValue('@WarDate', fieldInfo.WarDate)
        }
        if(fieldInfo.DLN){
            this
                .setValue('@DLN', fieldInfo.DLN)
        }
        if(fieldInfo.DLS){
            this
                .setValue('@DLS', fieldInfo.DLS)
        }
        if(fieldInfo.DLEx){
            this
                .setValue('@DLEx', fieldInfo.DLEx)
        }
        if(fieldInfo.Plate){
            this
                .setValue('@Plate', fieldInfo.Plate)
        }
        if(fieldInfo.PlateEx){
            this
                .setValue('@PlateEx', fieldInfo.PlateEx)
        }
      
        if(fieldInfo.CanRes){
            this
                .setValue('@CanRes', fieldInfo.CanRes)
        }
        if(fieldInfo.CanDat){
            this
                .setValue('@CanDat', fieldInfo.CanDat)
        }
        return this
    }
}              

module.exports = {
    url: "http://localhost:3000/#/enter",
    commands: [wantedCommands],
    elements: {
        BurgerBtn: '.bm-burger-button',
        enterScreen: 'p[name="enterOption"]',
        modifyScreen: 'p[name="modifyOption"]',
        cancelScreen: 'p[name="cancelOption"]',
        Header: 'input[name="hdrInput"]',
        MKE: 'input[name="mkeInput"]',
        ORI: 'input[name="oriInput"]',
        Name: 'input[name="namInput"]',
        Sex: 'select[name="sexInput"]',
        Race: 'select[name="racInput"]',
        Height: 'input[name="hgtInput"]',
        Weight: 'input[name="wgtInput"]',
        Hair: 'input[name="haiInput"]',
        Offense: 'input[name="offInput"]',
        WarDate: 'input[name="dowInput"]',
        DLN: 'input[name="olnInput"]',
        DLS: 'input[name="olsInput"]',
        DLEx: 'input[name="oldInput"]',
        Plate: 'input[name="licInput"]',
        PlateSt: 'input[name="lisInput"]',
        PlateEx: 'input[name="lidInput"]',
        ClrBtn: '#clearBtn',
        WarID: 'input[name="widInput"]',
        CanRes: 'input[name="resInput"]',
        CanDat: 'input[name="datInput"]',
        qTitle: 'input[name="queryTitle"]',
        qBody: 'input[name="queryBody"]',
        qHeader: "validHeader",
        eList:'#errorList',
        savBtn: '#saveBtn',
        titleBar: '.titleBar'











        




    }
}