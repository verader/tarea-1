import React from "react";
import StarShipProfile from "../starship-profile/starship-profile.component";

const StarShipList = ( {factionName, ships} ) => (
    <div>
        <h3>{factionName}</h3>
        {
            ships.map(({id, ...otherShipProps}) => (
                <StarShipProfile key={id} {...otherShipProps} />
            ))
        }
    </div>
);

export default StarShipList;