import React from "react";
import StarShipList from "../../components/starship-list/starship-list.component";
import STARSHIPS_DATA from "../../constants/starship-data.js";

class StarShips extends React.Component {
    constructor(){
        super();
        this.state = {
            factions: STARSHIPS_DATA
        };
    }

    render() {
        
        const { factions } = this.state;

        return(
            <div align="center">
                <h2>Starships</h2>
                {
                    factions.map( ({id, ...otherFactionProps}) => (
                        <StarShipList key={id} {...otherFactionProps} />
                    ))
                }
            </div>
        );
    }
};

export default StarShips;