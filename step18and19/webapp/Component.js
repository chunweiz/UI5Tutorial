sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "cw/demo/controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog ) {
   "use strict";
   return UIComponent.extend("cw.demo.Component", {
	 metadata : {
		manifest : "json"
	},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         
          // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "cw.demo.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
         
         this.helloDialog = new HelloDialog();
	}
   });
});