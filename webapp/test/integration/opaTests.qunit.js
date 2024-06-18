sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hab/zvaadfvk00001/test/integration/FirstJourney',
		'hab/zvaadfvk00001/test/integration/pages/UserTourList',
		'hab/zvaadfvk00001/test/integration/pages/UserTourObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserTourList, UserTourObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hab/zvaadfvk00001') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserTourList: UserTourList,
					onTheUserTourObjectPage: UserTourObjectPage
                }
            },
            opaJourney.run
        );
    }
);