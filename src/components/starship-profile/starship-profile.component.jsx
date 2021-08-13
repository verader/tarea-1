import React from "react";
import "./starship-profile.styles.scss"; 

const StarShipProfile = ({ name, model, length, crew, passengers, starship_class, imgUrl }) => (
    <div class="list-item">   
        <img src={imgUrl} height="250" />
        <div align="left">
            <span >Name: {name}</span><br/>
            <span >Model: {model}</span><br/>
            <span>Length: {length}</span><br/>
            <span>Crew: {crew}</span><br/>
            <span>Passengers: {passengers}</span><br/>
            <span>Class: {starship_class}</span>            
        </div>
    </div>

);

export default StarShipProfile;