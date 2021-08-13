import React from "react";
import PlanetProfile from "../../components/planet-profile/planet-profile.component";
import PLANETS_DATA from "../../constants/planets-data.js";

class Planets extends React.Component {
    constructor(){
        super();
        this.state = {
            planets: PLANETS_DATA
        };
    }

    render() {
        
        const { planets } = this.state;
        
        return(
            <div align="center">
                <h2>Planets</h2>
                {
                    planets.map( ({id, ...otherPlanetProps}) => (
                        <PlanetProfile key={id} {...otherPlanetProps} />
                    ))
                }
            </div>
        );
    }
};

export default Planets;