const STARSHIPS_DATA = [
    {
        id: "1",
        factionName: "Rebel Alliance",
        routeName: "rebel",
        ships: [
            {
                id: "1",
                name: "CR90 corvette",
                model: "CR90 corvette",
                starship_class: "corvette",
                length: "150",
                crew: "30-165",
			    passengers: "600",
                imgUrl: 'https://img-new.cgtrader.com/items/853761/2d4bc4a35f/tantive-iv-corellian-corvette-star-wars-3d-model-animated-max-fbx-mat.jpg'
            },
            {
                id: "4",
                name: "Millennium Falcon",
                model: "YT-1300 light freighter",
                length: "34.37",
                crew: "4",
                passengers: "6",
                starship_class: "Light freighter",     
                imgUrl: "https://img.cinemablend.com/filter:scale/cb/7/e/d/9/7/b/7ed97b4973c026af6b10fc048f9674dab23f029f0686ba49fa7588c3afb4262c.jpg?mw=600"
            } 
        ]
    },
    {
        id: "2",
        factionName: "Gallactic Empire",
        routeName: "empire",
        ships: [
            {
                id: "2",
                name: "Star Destroyer",
                model: "Imperial I-class Star Destroyer",
                starship_class: "Star Destroyer",
                length: "1.600",
                crew: "47.060",
                passengers: "n/a",
                imgUrl: "https://cdn-3d.niceshops.com/upload/image/product/large/default/revell-modelo-imperial-star-destroyer-1-ud-311143-es.jpg"
            },
            {
                id: "3",
                name: "Death Star",
                model: "DS-1 Orbital Battle Station",                
                length: "120.000",                
                crew: "342.953",
                passengers: "843.342",
                starship_class: "Deep Space Mobile Battlestation",                    
                imgUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/streams/2013/January/130116/1B5563122-120221-death-star-1045a.jpg"
            }
        ]       
    }
];

export default STARSHIPS_DATA;