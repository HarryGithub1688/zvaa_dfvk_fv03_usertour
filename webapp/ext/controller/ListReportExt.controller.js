sap.ui.define([], function () {
	return sap.ui.controller("hab.zvaadfvk00001.ext.controller.ListReportExt", {
		
		onInit: function () {},
		
		onAfterRendering: function () {
			this.newFilterDate();
			//this.newDrafColumn();
			this.columnsConfig();
		},

		newFilterDate: function () {
			var listReport = this.getView().byId("fe::ListReport");
			var listReportFilter = this.getView().byId("fe::FilterBar::UserTour");
			var dateFilter = this.getView().byId("fe::FilterBar::UserTour::FilterField::DeliveryDate");

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
				if (dateFilter.getContent().getDateValue() != null) {
					var formatDateForFilter = dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + dateFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
					listReport.getContent().getContent()._oTable.getBinding("items").filter((new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.EQ, formatDateForFilter)));
				}
			}.bind(this));

			/* dateFilter.getContent().attachChange(function (env) {
				debugger
				var multiInput = new sap.m.MultiInput({})
				var token = new sap.m.Token({})
				var tokenizer = new sap.m.Tokenizer({})
			}.bind(this)); */

		},

		newDrafColumn: function () {
			/* var listReport = this.getView().byId("fe::ListReport");
			var newDrafColumn = new sap.m.Column({ header: new sap.m.Label({ text:"hi" }) });
			listReport.getContent().getContent().addColumn(newDrafColumn); */
		},

		columnsConfig: function () {
			var listReport = this.getView().byId("fe::ListReport");
			var drafColumn = listReport.getContent().getContent().getColumns().find(e => e.sId.includes("DraftColumn"));
			var tourIdColumn = listReport.getContent().getContent().getColumns().find(e => e.sId.includes("TourId"));
			var userIdColumn = listReport.getContent().getContent().getColumns().find(e => e.sId.includes("UserId"));
			var lastChangedAtColumn = listReport.getContent().getContent().getColumns().find(e => e.sId.includes("LastChangedAt"));

			//reorder drafColumn
			listReport.getContent().getContent().removeColumn(drafColumn, true);
			listReport.getContent().getContent().insertColumn(drafColumn, 4);

			//set width
			//listReport.getContent().getContent().setEnableAutoColumnWidth(true);
			tourIdColumn.setWidth("40mm");
			userIdColumn.setWidth("40mm");
			lastChangedAtColumn.setWidth("auto");
		}

	});
});