sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mdtesttravel/test/integration/FirstJourney',
		'mdtesttravel/test/integration/pages/TravelList',
		'mdtesttravel/test/integration/pages/TravelObjectPage',
		'mdtesttravel/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mdtesttravel') + '/index.html'
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