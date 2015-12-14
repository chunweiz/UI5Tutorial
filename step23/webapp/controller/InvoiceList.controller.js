sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"cw/demo/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("cw.demo.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});