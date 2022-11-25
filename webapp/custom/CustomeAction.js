sap.ui.define(
    [],
    function () {
         "use strict";
         return {
                onPrint: function(oContext, aSelectedContexts){
                    
                    console.log(oContext.getObject())
                    console.log(aSelectedContexts
                                .map(function(item) {
                                    var path = item.getPath()
                                    console.log(item.getModel().getProperty(path))
                                }))
/*                     var notNo = this.getModel().getProperty(sPath + "/BookingUUID"); */

                    /* Call Restful API */
                   /*   const mUrl = 'https://api.sampleapis.com/coffee/hot'
                    var mHeader = new Headers();
                    mHeader = {
                        'content-type' : 'application/json',
                        'Access-Control-Allow-Origin' : '*'
                    };

                    var requestOption = {
                        method: 'GET',
                        headers: mHeader
                    };

                    fetch ( mUrl, requestOption)
                    .then(response => response.text())
                    .then(result => {
                            console.log("Call Restful API");
                            console.log(result)
                        })
                
                    .catch(error => console.log('error', error))
 */

                    /* Call XML from HTTP */
/*                     var mXHR = new XMLHttpRequest();
                    mXHR.open("POST", "https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx");
                    mXHR.onload = () => {
                        if (mXHR.readyState === mXHR.DONE) {
                            console.log("Call  XML from HTTP");
                            console.log(mXHR.response);
                        }
                      };
                    mXHR.send()   */

                    /* Call SOAP Service  */
                    var mURL = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1=1&Arg2=2'
                    var oXMLModel = new sap.ui.model.xml.XMLModel()
                    $.ajax({
                        url: mURL,
                        method: "POST",
                        dataType: "xml",
                        //processData:false,
                        contentType: "text/xml; charset=\"utf-8\"",
                        success: function (response, textStatus, jqXHR) {
                            console.log("Call SOAP Service");
                            console.log(response);
                        },
                        error: function (xhr, status) {
                            console.log("Error: : " + status);
                        }
                    }); 

                    if (aSelectedContexts && aSelectedContexts.length === 1) {
                        console.log('true onPrint')
                        return true;
                     }
                      console.log('false onPrint')
                      return false;
                },
                message: function (oContext, aSelectedContexts) {
                   // oContext :  is the binding context of the current entity
                   // aSelectedContexts : contains an array of binding contexts corresponding to
                   //       selected items in case of table action (or)
                   //
                   alert("message");
                },
         };
    }
);  