sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("Split.controller.Master", {

		onInit : function () {
			this.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {
				this.getOwnerComponent().getRouter()
					.navTo("orderDetails", true);
		},
		onSelectionChange: function(oEvent) {
			var categoryId = oEvent.getSource().getSelectedItem().getBindingContext().getProperty("categoryId");
			this.getOwnerComponent().getRouter()
				.navTo("orderDetails", 
					{orderId:categoryId}, 
					!Device.system.phone);
		}

	});

});