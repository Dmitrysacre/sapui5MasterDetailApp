sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (UIComponent, JSONModel, Device) {
    "use strict";
    return UIComponent.extend("SplitDemo", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        var oModel = new JSONModel("model/data.json");
        this.setModel(oModel);
        this.setModel(this.createDeviceModel(), "device");

        UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();

        this.getRouter().attachTitleChanged(function (oEvent) {
          document.title = oEvent.getParameter("title");
        });
      },
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
    });
  },
);
