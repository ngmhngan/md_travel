sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mdtravel/test/integration/FirstJourney',
		'mdtravel/test/integration/pages/TravelList',
		'mdtravel/test/integration/pages/TravelObjectPage',
		'mdtravel/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mdtravel') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);