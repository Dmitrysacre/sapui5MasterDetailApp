sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/Device"
], function(Controller, History, Device) {
	"use strict";

	return Controller.extend("SplitDemo.controller.Detail2", {

		onInit : function () {
			this.getOwnerComponent().getRouter().getRoute("productDetails").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {
			var orderId = oEvent.getParameter("arguments").orderId;
			var productId = oEvent.getParameter("arguments").productId;
			this.getView().bindElement("/orders/" + orderId + "/products/" + productId);
		},
		onNavBack : function () {
			var sPreviousHash = History.getInstance().getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getOwnerComponent().getRouter()
					.navTo("orderDetails", 
						{orderId:0}, !Device.system.phone);
			}
		}

	});

});