sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("cw.demo.controller.App", {
   	onShowHello : function() {
   		alert("HelloWorld");
   	}
   });
});