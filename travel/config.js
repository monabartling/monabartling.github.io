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
    title: 'Eine Reise, die Down Under ist',
    subtitle: '5 1/2 Wochen in Australien',
    //byline: 'By a Digital Storyteller',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'abflug',
            alignment: 'left',
            hidden: false,
            title: 'Tag Null: Der Beginn einer langen Reise',
            image: 'images/flughafen_hh.jpeg',
            description: 'Es geht los. Die Koffer sind gepackt und wir machen uns von Brettorf über Bremen nach Hamburg auf. Jetzt heißts ab in die Blechbüchse für die nächsten 20 Stunden!',
            location: {
              center: [8.46821, 52.93539],
              zoom: 7.54,
              pitch: 33.00,
              bearing: -39.20
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
        {
            id: 'flug',
            alignment: 'left',
            hidden: false,
            title: 'Ab nach Brisbane!',
            image: 'images/flughafen_brisbane.jpeg',
            description: 'Angekommen! Juhu!',
            location: {
              center: [151.76011, -28.19677],
              zoom: 6.49,
              pitch: 33.00,
              bearing: -39.20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                curve: 2, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
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
