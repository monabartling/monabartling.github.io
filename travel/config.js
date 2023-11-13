var config = {
    style: 'mapbox://styles/monabartling/clov8zmwn008w01of4rwq4469', //'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibW9uYWJhcnRsaW5nIiwiYSI6ImNpeWQyMTUweDAwcTEyd3BlNGswMGtwMGoifQ.tM-yCumZHhlK0h-YTexAHw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first_day',
            alignment: 'left',
            hidden: false,
            title: 'Tag Null: Der Beginn einer langen Reise',
            image: 'images/flughafen_hh.jpeg',
            description: 'Es geht los. Die Koffer sind gepackt und wir machen uns von Brettorf über Bremen nach Hamburg auf. Jetzt heißts ab in die Blechbüchse für die nächsten 20 Stunden!',
            location: {
                center: [14.20450, 50.64347],
                zoom: 3.93,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'line_travel',
                //     opacity: 0.5
                //     //duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'line_travel',
                //     opacity: 0
                // }
            ]
        },
        // {
        //     id: 'second-identifier',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Text, text, text <img src="images/brisbane_1.jpeg"> <img src="images/brisbane_1.jpeg">',
        //     location: {
        //         center: [-77.020636, 38.886900],
        //         zoom: 8.5,
        //         pitch: 60,
        //         bearing: -43.2,
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: true,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'third-identifier',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [6.15116, 46.20595],
        //         zoom: 12.52,
        //         pitch: 8.01,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
