sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("cw.demo.controller.App", {
   	onOpenDialog : function () {
   			var dialog = this.getOwnerComponent().helloDialog;
			dialog.open(this.getView());
		}
  
   });
});