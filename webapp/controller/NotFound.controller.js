sap.ui.define([
		"northwind/ProductData/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("northwind.ProductData.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);