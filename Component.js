sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/Button",
    "sap/m/MessageToast"
], function (UIComponent, Button, MessageToast) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.app.Component", {
        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Create a button instance
            var oButton = new Button({
                text: "Click Me",
                press: function () {
                    MessageToast.show("ui5 started");
                }
            });

            // Place the button in the DOM
            oButton.placeAt("content");
        }
    });
}); 