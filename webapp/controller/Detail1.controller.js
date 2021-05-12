sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/Device"
], function(Controller, History, Device) {
	"use strict";

	return Controller.extend("SplitDemo.controller.Detail1", {

		onInit : function () {
			this.getOwnerComponent().getRouter().getRoute("orderDetails").attachPatternMatched(this._onRouteMatched, this)
		},
		_onRouteMatched: function(oEvent) {
			this._orderId = oEvent.getParameter("arguments").orderId;
			this.getView().bindElement("/orders/" + this._orderId);
		},
		onSelectionChange: function(oEvent) {
			var sProductId = oEvent.getSource().getBindingContext().getProperty("productId");
			this.getOwnerComponent().getRouter()
				.navTo("productDetails",
					{orderId:this._orderId, productId: sProductId});
		},
		onNavBack : function() {
				this.getOwnerComponent().getRouter().navTo("master", {}, true);
		}
	});

});