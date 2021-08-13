import React from "react";
import "./planet-profile.styles.scss"; 

const PlanetProfile = ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, imageUrl }) => (
    <div class="list-item">   
        <img src={imageUrl} height="250" />
        <div align="left">
            <span>Name: {name}</span><br/>
            <span>Rotation Period: {rotation_period}</span><br/>
            <span>Orbital Period: {orbital_period}</span><br/>
            <span>Diameter: {diameter}</span><br/>
            <span>Climate: {climate}</span><br/>
            <span>Gravity: {gravity}</span><br/>            
            <span>Terrain: {terrain}</span><br/>            
            <span>Surface water: {surface_water}</span><br/>            
            <span>Population: {population}</span>           
        </div>
    </div>

);

export default PlanetProfile;