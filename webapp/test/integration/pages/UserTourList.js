sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'hab.zvaadfvk00001',
            componentId: 'UserTourList',
            contextPath: '/UserTour'
        },
        CustomPageDefinitions
    );
});