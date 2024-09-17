sap.ui.define([], function () {
	return sap.ui.controller("hab.zvaadfvk00001.ext.controller.ListReportExt", {
		
		onInit: function () {},
		
		onAfterRendering: function () {
			this.newFilterDate();
		},

		newFilterDate: function () {
			var listReport = this.getView().byId("hab.zvaadfvk00001::UserTourList--fe::ListReport");
			var listReportFilter = this.getView().byId("hab.zvaadfvk00001::UserTourList--fe::FilterBar::UserTour");
			var dateFilter = this.getView().byId("hab.zvaadfvk00001::UserTourList--fe::FilterBar::UserTour::FilterField::DeliveryDate");

			if (new Date().getHours() > 19) {
				var today = new Date();
				today.setDate(new Date().getDate()+1);
				var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
				//var oFilter = new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.Contains, today);
			} else {
				var today = new Date();
				var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
				//var oFilter = new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.Contains, today);
			}

			dateFilter.setContent(new sap.m.DatePicker({ value: todayFormat, width: "100%"}));
			//var formatDateForFilter = today.toLocaleDateString().split("/")[2] + "-" + today.toLocaleDateString().split("/")[1] + "-" + today.toLocaleDateString().split("/")[0];

			listReportFilter.attachSearch(function (env) {
				var formatDateForFilter = dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
				listReport.getContent().getContent()._oTable.getBinding("items").filter((new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.EQ, formatDateForFilter)))
			}.bind(this));

		}

	});
});